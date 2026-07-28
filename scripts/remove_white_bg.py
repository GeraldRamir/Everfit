"""Flood-fill studio / checkerboard backgrounds to true alpha."""
from __future__ import annotations

from collections import deque
from pathlib import Path
import sys

from PIL import Image


def is_bg(rgb: tuple[int, int, int]) -> bool:
    r, g, b = rgb
    brightness = (r + g + b) / 3.0
    chroma = max(r, g, b) - min(r, g, b)
    # white / light gray studio
    if brightness > 200 and chroma < 35:
        return True
    # mid checkerboard gray squares
    if chroma < 18 and 150 < brightness < 230:
        return True
    # near-black studio
    if brightness < 28 and chroma < 20:
        return True
    # residual soft gray halo
    if chroma < 12 and 80 < brightness < 200:
        return True
    return False


def is_product(rgb: tuple[int, int, int]) -> bool:
    r, g, b = rgb
    chroma = max(r, g, b) - min(r, g, b)
    if chroma < 18:
        return False
    # burgundy / wine plates
    if r > 45 and r >= g + 12 and r >= b + 12 and chroma > 20:
        return True
    # gold / brass handle
    if r > 120 and g > 80 and b < 140 and r + g > b * 2.2 and chroma > 25:
        return True
    # orange collar
    if r > 150 and g < 130 and b < 110 and chroma > 40:
        return True
    # white specular on product (keep if bright and neighbors will protect)
    return False


def flood_transparent(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()
    visited = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    def seed(x: int, y: int) -> None:
        if 0 <= x < w and 0 <= y < h and not visited[y][x]:
            r, g, b, a = px[x, y]
            if a > 0 and is_bg((r, g, b)) and not is_product((r, g, b)):
                visited[y][x] = True
                q.append((x, y))

    # seed all border pixels + a sparse grid of bg candidates
    for x in range(w):
        seed(x, 0)
        seed(x, h - 1)
    for y in range(h):
        seed(0, y)
        seed(w - 1, y)
    for y in range(0, h, 24):
        for x in range(0, w, 24):
            seed(x, y)

    while q:
        x, y = q.popleft()
        r, g, b, _ = px[x, y]
        px[x, y] = (r, g, b, 0)
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                nr, ng, nb, na = px[nx, ny]
                if na == 0:
                    visited[ny][nx] = True
                    continue
                if is_product((nr, ng, nb)):
                    visited[ny][nx] = True
                    continue
                if is_bg((nr, ng, nb)):
                    visited[ny][nx] = True
                    q.append((nx, ny))

    # wipe remaining non-product bg islands (checkerboard leftovers)
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            if is_bg((r, g, b)) and not is_product((r, g, b)):
                px[x, y] = (r, g, b, 0)

    # erode light halo next to transparent pixels
    src = img.copy().load()
    for y in range(1, h - 1):
        for x in range(1, w - 1):
            r, g, b, a = src[x, y]
            if a == 0 or is_product((r, g, b)):
                continue
            tn = sum(
                1
                for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (1, 1), (-1, 1), (1, -1))
                if src[x + dx, y + dy][3] == 0
            )
            brightness = (r + g + b) / 3.0
            chroma = max(r, g, b) - min(r, g, b)
            if tn >= 2 and chroma < 40 and brightness > 140:
                px[x, y] = (r, g, b, 0)
            elif tn >= 3 and chroma < 55 and brightness > 180:
                px[x, y] = (r, g, b, 0)

    return img


def main(src: str, dst: str) -> None:
    out = flood_transparent(Image.open(src))
    Path(dst).parent.mkdir(parents=True, exist_ok=True)
    out.save(dst, "PNG")
    px = out.load()
    w, h = out.size
    transparent = sum(1 for y in range(0, h, 6) for x in range(0, w, 6) if px[x, y][3] == 0)
    total = ((w + 5) // 6) * ((h + 5) // 6)
    print(f"saved {dst} {out.size} transparent~{transparent / total:.2%}")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
