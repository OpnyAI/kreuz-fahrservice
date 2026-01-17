import { ReactNode } from "react";

export function MediaCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-ink-200 bg-white p-4 shadow-lg">
      {children}
    </div>
  );
}
