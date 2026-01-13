import { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return (
    <ol className="grid gap-6 md:grid-cols-3" aria-label="Ablauf in drei Schritten">
      {children}
    </ol>
  );
}

export function Step({
  index,
  title,
  children
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="rounded-xl border border-ink-200 bg-white p-6 shadow-card">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-sm font-semibold text-accent-600">
          {index}
        </span>
        <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-ink-600">{children}</p>
    </li>
  );
}
