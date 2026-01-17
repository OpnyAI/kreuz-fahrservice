import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";

const emailCta = {
  href: "mailto:kontakt@kreuz-fahrservice.de",
  label: "E-Mail schreiben",
};

const whatsappCta = {
  href: "https://wa.me/4915222665594",
  label: "WhatsApp schreiben",
};

type ResponsiveMessageCtaProps = {
  type?: "link" | "button";
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  mobileClassName?: string;
  desktopClassName?: string;
  mobileDisplayClassName?: "inline-flex" | "flex";
  desktopDisplayClassName?: "inline-flex" | "flex";
  iconClassName?: string;
  mobileLabel?: string;
  desktopLabel?: string;
  mobileAriaLabel?: string;
  desktopAriaLabel?: string;
};

export function ResponsiveMessageCta({
  type = "link",
  variant,
  size,
  mobileClassName,
  desktopClassName,
  mobileDisplayClassName = "inline-flex",
  desktopDisplayClassName = "inline-flex",
  iconClassName = "h-4 w-4",
  mobileLabel = whatsappCta.label,
  desktopLabel = emailCta.label,
  mobileAriaLabel,
  desktopAriaLabel,
}: ResponsiveMessageCtaProps) {
  const mobileClasses = [
    mobileDisplayClassName,
    mobileClassName,
    "md:hidden",
  ]
    .filter(Boolean)
    .join(" ");
  const desktopClasses = [
    "hidden",
    `md:${desktopDisplayClassName}`,
    desktopClassName,
  ]
    .filter(Boolean)
    .join(" ");

  if (type === "button") {
    return (
      <>
        <Button
          href={whatsappCta.href}
          variant={variant}
          size={size}
          ariaLabel={mobileAriaLabel ?? mobileLabel}
          className={mobileClasses}
        >
          <MessageCircle className={iconClassName} aria-hidden="true" />
          {mobileLabel}
        </Button>
        <Button
          href={emailCta.href}
          variant={variant}
          size={size}
          ariaLabel={desktopAriaLabel ?? desktopLabel}
          className={desktopClasses}
        >
          <Mail className={iconClassName} aria-hidden="true" />
          {desktopLabel}
        </Button>
      </>
    );
  }

  return (
    <>
      <a
        href={whatsappCta.href}
        className={mobileClasses}
        aria-label={mobileAriaLabel ?? mobileLabel}
      >
        <MessageCircle className={iconClassName} aria-hidden="true" />
        {mobileLabel}
      </a>
      <a
        href={emailCta.href}
        className={desktopClasses}
        aria-label={desktopAriaLabel ?? desktopLabel}
      >
        <Mail className={iconClassName} aria-hidden="true" />
        {desktopLabel}
      </a>
    </>
  );
}
