import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  max?: number;
};

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1" aria-label={`${rating} de ${max} estrellas`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-everfit-orange text-everfit-orange" : "text-gray-200"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
