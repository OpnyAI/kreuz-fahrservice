import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  children
}: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base text-ink-600 sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
