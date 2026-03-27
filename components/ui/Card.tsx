import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-black/[0.04] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
