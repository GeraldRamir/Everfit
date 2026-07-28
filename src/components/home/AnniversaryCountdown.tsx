"use client";

import { useEffect, useState } from "react";
import { ANNIVERSARY_END_MS, getAnniversaryRemainingMs } from "@/lib/anniversary";
import { cn } from "@/lib/utils";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function splitRemaining(ms: number) {
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds };
}

export default function AnniversaryCountdown({
  labels,
  endsLabel,
  compact = false,
}: {
  labels: { days: string; hours: string; minutes: string; seconds: string };
  endsLabel: string;
  compact?: boolean;
}) {
  const [remaining, setRemaining] = useState(() => getAnniversaryRemainingMs());

  useEffect(() => {
    const tick = () => setRemaining(getAnniversaryRemainingMs());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const { days, hours, minutes, seconds } = splitRemaining(remaining);
  const ended = remaining <= 0;

  const units = [
    { value: days, label: labels.days },
    { value: hours, label: labels.hours },
    { value: minutes, label: labels.minutes },
    { value: seconds, label: labels.seconds },
  ];

  if (ended) {
    return (
      <p className="text-sm font-medium" suppressHydrationWarning>
        {endsLabel}
      </p>
    );
  }

  return (
    <div className="w-full" suppressHydrationWarning>
      <p
        className={cn(
          "mb-2 text-xs font-semibold uppercase tracking-[0.16em]",
          compact ? "text-left" : "text-center text-white/70"
        )}
      >
        {endsLabel}
      </p>
      <div
        className={cn(
          "grid grid-cols-4 gap-2",
          compact ? "max-w-md" : "mx-auto max-w-lg sm:gap-3"
        )}
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className={cn(
              "rounded-2xl border px-2 py-2.5 text-center backdrop-blur-md sm:px-3",
              compact
                ? "border-everfit-wine/15 bg-white shadow-sm"
                : "border-white/18 bg-white/[0.07] py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:py-4"
            )}
          >
            <div
              className={cn(
                "font-display font-bold tabular-nums",
                compact
                  ? "text-xl text-everfit-charcoal sm:text-2xl"
                  : "text-2xl text-white sm:text-3xl md:text-4xl"
              )}
            >
              {pad(unit.value)}
            </div>
            <div
              className={cn(
                "mt-0.5 text-[0.65rem] font-semibold uppercase tracking-wider sm:text-xs",
                compact ? "text-everfit-wine/60" : "text-white/65"
              )}
            >
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      <time dateTime={new Date(ANNIVERSARY_END_MS).toISOString()} className="sr-only">
        {new Date(ANNIVERSARY_END_MS).toISOString()}
      </time>
    </div>
  );
}
