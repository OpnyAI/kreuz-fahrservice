import Link from "next/link";
import { ReactNode } from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition focus-visible:outline-none";

const variants = {
  primary:
    "border-accent-600 bg-accent-600 text-white hover:bg-accent-500 hover:border-accent-500",
  secondary:
    "border-ink-300 bg-white text-ink-800 hover:border-accent-600 hover:text-accent-600",
  ghost: "border-transparent text-ink-700 hover:text-accent-600"
};

const sizes = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-5 py-3",
  lg: "text-base px-6 py-3"
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  ariaLabel
}: ButtonProps) {
  const className = `${baseStyles} ${variants[variant]} ${sizes[size]}`;

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={className} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
