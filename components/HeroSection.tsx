import Image from "next/image";
import { PersonalInfo } from "@/types";
import { MapPin } from "lucide-react";

interface HeroSectionProps {
  data: PersonalInfo;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex border-b border-gray-100 flex-col items-center justify-center overflow-hidden bg-[var(--color-bg-base)]">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary-light)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      
      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mb-12 md:mb-0">
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8">
          <Image 
            src={data.photoUrl} 
            alt={data.name}
            fill
            sizes="(max-width: 768px) 160px, 192px"
            className="object-cover"
            priority
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text-main)] mb-4 tracking-tight">
          {data.name}
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl leading-relaxed">
          {data.tagline}
        </p>
        
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <MapPin size={16} className="text-[#D4AF37]" />
          <span>{data.location}</span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-60">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-2 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-primary)] to-transparent"></div>
      </div>
    </section>
  );
}
