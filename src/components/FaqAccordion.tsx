"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    style={{
      borderBottom: "1px solid rgba(255,255,255,0.07)",
    }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      style={{ background: "none", border: "none" }}
    >
      <span
        className="text-white font-medium pr-4"
        style={{ fontSize: "16px", lineHeight: 1.5 }}
      >
        {item.question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="shrink-0"
      >
        <ChevronDown
          size={18}
          style={{ color: "rgba(255,255,255,0.35)" }}
        />
      </motion.div>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{ overflow: "hidden" }}
    >
      <div 
        style={{
          visibility: isOpen ? "visible" : "hidden",
          transition: "visibility 0s linear",
          transitionDelay: isOpen ? "0s" : "0.3s"
        }}
      >
        <p
          className="pb-5 pt-2"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "15px",
            lineHeight: 1.7,
            maxWidth: "640px",
          }}
        >
          {item.answer}
        </p>
      </div>
    </motion.div>
  </div>
);

export default function FaqAccordion({ faqCategories }: { faqCategories: FaqCategory[] }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  return (
    <>
      {faqCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: categoryIndex * 0.08,
          }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2
            className="text-xs uppercase font-medium mb-2"
            style={{
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.12em",
            }}
          >
            {category.title}
          </h2>
          <div>
            {category.items.map((item, itemIndex) => (
              <AccordionItem
                key={itemIndex}
                item={item}
                isOpen={openItems[`${categoryIndex}-${itemIndex}`] || false}
                onToggle={() => toggleItem(categoryIndex, itemIndex)}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
}
