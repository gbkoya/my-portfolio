"use client";

import { useEffect, useState } from "react";

/**
 * Live local time in Lagos — the one piece of real evidence on the page that
 * this is a person, not a brochure.
 */
export default function LagosClock({ className = "mono" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time ?? "--:--"} WAT
    </span>
  );
}
