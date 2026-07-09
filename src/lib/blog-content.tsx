type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export function parseBlogContent(content: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      blocks.push({ type: "ul", items: [...listItems] });
      listItems = [];
    }
  }

  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      continue;
    }

    if (line.startsWith("> ")) {
      flushList();
      blocks.push({ type: "quote", text: line.slice(2).trim() });
      continue;
    }

    if (/^[-•*]\s+/.test(line)) {
      listItems.push(line.replace(/^[-•*]\s+/, "").trim());
      continue;
    }

    flushList();
    blocks.push({ type: "p", text: line });
  }

  flushList();
  return blocks;
}

export function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function BlogContent({ content }: { content: string }) {
  const blocks = parseBlogContent(content);

  return (
    <div className="blog-prose">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={index} className="blog-prose-h2">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="blog-prose-h3">
                {block.text}
              </h3>
            );
          case "quote":
            return (
              <blockquote key={index} className="blog-prose-quote">
                {block.text}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={index} className="blog-prose-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          default:
            return (
              <p key={index} className="blog-prose-p">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
