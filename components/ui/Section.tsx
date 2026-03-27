import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bgWhite?: boolean;
}

export default function Section({ id, className = "", children, bgWhite = true }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative ${bgWhite ? 'bg-white' : 'bg-[var(--color-secondary)]'} ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12 w-full relative z-10">
        {children}
      </div>
    </section>
  );
}
