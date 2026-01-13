"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionRow
          key={item.title}
          item={item}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const buttonId = useId();
  const panelId = useId();

  return (
    <div className="rounded-xl border border-ink-200 bg-white shadow-card">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink-900"
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={buttonId}
          onClick={onToggle}
        >
          {item.title}
          <ChevronDown
            className={`h-5 w-5 text-accent-600 transition ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`${isOpen ? "block" : "hidden"} px-5 pb-5 text-sm text-ink-600`}
      >
        {item.content}
      </div>
    </div>
  );
}
