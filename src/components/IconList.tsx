import { ReactNode } from "react";

export function IconList({ children }: { children: ReactNode }) {
  return <ul className="grid gap-3 text-sm text-ink-700">{children}</ul>;
}

export function IconListItem({
  icon,
  children
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 text-accent-600">{icon}</span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
