import { cn } from "@/lib/utils";

export function FieldGroup({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-everfit-charcoal">
        {label}
      </label>
      {children}
    </div>
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-everfit-charcoal",
        "placeholder:text-gray-400",
        "transition-[border-color,box-shadow] duration-200",
        "focus:border-everfit-wine focus:outline-none focus:ring-2 focus:ring-everfit-wine/20",
        className
      )}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-everfit-charcoal",
        "transition-[border-color,box-shadow] duration-200",
        "focus:border-everfit-wine focus:outline-none focus:ring-2 focus:ring-everfit-wine/20",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-everfit-charcoal",
        "placeholder:text-gray-400",
        "transition-[border-color,box-shadow] duration-200",
        "focus:border-everfit-wine focus:outline-none focus:ring-2 focus:ring-everfit-wine/20",
        className
      )}
      {...props}
    />
  );
}

export function Alert({
  variant,
  children,
  className,
}: {
  variant: "success" | "error";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      aria-live="polite"
      className={cn(
        "rounded-lg border px-4 py-3 text-sm",
        variant === "success" && "border-green-200 bg-green-50 text-green-800",
        variant === "error" && "border-red-200 bg-red-50 text-red-800",
        className
      )}
    >
      {children}
    </div>
  );
}
