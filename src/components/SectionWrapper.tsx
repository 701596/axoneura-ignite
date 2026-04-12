import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = "", id }: SectionWrapperProps) => (
  <section className={`section-padding ${className}`} id={id}>
    <div className="container-max">{children}</div>
  </section>
);

export default SectionWrapper;
