import Image from "next/image";
import { Clock, Target } from "lucide-react";
import { cn } from "@/lib/utils";

type TransformationImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function TransformationImage({
  src,
  alt,
  priority,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: TransformationImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-everfit-cream", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/70"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
        Antes
      </span>
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-everfit-orange/90 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white shadow-lg">
        Después
      </span>
    </div>
  );
}

type TransformationMetaProps = {
  focus: string;
  program: string;
  duration: string;
  note?: string;
  className?: string;
};

export function TransformationMeta({
  focus,
  program,
  duration,
  note,
  className,
}: TransformationMetaProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex flex-wrap gap-2">
        <span className="meta-pill">
          <Target size={13} aria-hidden="true" />
          {focus}
        </span>
        <span className="meta-pill">
          <Clock size={13} aria-hidden="true" />
          {duration}
        </span>
      </div>
      <p className="text-sm font-semibold text-everfit-wine">{program}</p>
      {note && <p className="text-sm leading-relaxed text-gray-600">{note}</p>}
    </div>
  );
}
