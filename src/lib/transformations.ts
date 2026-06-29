import type { TransformationEntry } from "@/i18n/types";

export type TransformationCategory = "recomposicion" | "fuerza" | "tonificacion";

export type TransformationMeta = {
  id: string;
  image: string;
  category: TransformationCategory;
  featured?: boolean;
};

export const TRANSFORMATION_META: TransformationMeta[] = [
  { id: "01", image: "/images/transformaciones/transformation-01.jpeg", category: "recomposicion", featured: true },
  { id: "02", image: "/images/transformaciones/transformation-02.jpeg", category: "tonificacion" },
  { id: "03", image: "/images/transformaciones/transformation-03.jpeg", category: "recomposicion" },
  { id: "04", image: "/images/transformaciones/transformation-04.jpeg", category: "tonificacion" },
  { id: "05", image: "/images/transformaciones/transformation-05.jpeg", category: "recomposicion" },
  { id: "06", image: "/images/transformaciones/transformation-06.jpeg", category: "fuerza", featured: true },
  { id: "07", image: "/images/transformaciones/transformation-07.jpeg", category: "fuerza" },
  { id: "08", image: "/images/transformaciones/transformation-08.jpeg", category: "fuerza", featured: true },
  { id: "09", image: "/images/transformaciones/transformation-09.jpeg", category: "tonificacion" },
  { id: "10", image: "/images/transformaciones/transformation-10.jpeg", category: "recomposicion" },
  { id: "11", image: "/images/transformaciones/transformation-11.jpg", category: "tonificacion" },
];

export type Transformation = TransformationMeta & TransformationEntry;

export function buildTransformations(entries: TransformationEntry[]): Transformation[] {
  return TRANSFORMATION_META.map((meta, index) => ({
    ...meta,
    ...entries[index],
  }));
}

export const SPOTLIGHT_ID = "08";
