import Section from "./ui/Section";
import Card from "./ui/Card";
import { LifestyleInfo } from "@/types";
import { Plane, Laptop, Car, Share2, Gamepad2, Compass } from "lucide-react";

interface LifestyleInterestsProps {
  data: LifestyleInfo;
}

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane size={32} className="text-[#D4AF37]" />,
  Laptop: <Laptop size={32} className="text-[#D4AF37]" />,
  Car: <Car size={32} className="text-[#D4AF37]" />,
  Share2: <Share2 size={32} className="text-[#D4AF37]" />,
  Gamepad2: <Gamepad2 size={32} className="text-[#D4AF37]" />,
};

export default function LifestyleInterests({ data }: LifestyleInterestsProps) {
  return (
    <Section id="lifestyle">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-main)] tracking-tight mb-4">
          Lifestyle & Interests
        </h2>
        <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
        <p className="text-[var(--color-text-muted)] text-lg">
          Finding balance and joy beyond work through diverse passions and experiences.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {data.interests.map((interest, index) => (
          <Card 
            key={index} 
            className="flex flex-col items-center justify-center p-8 w-40 h-40 group hover:-translate-y-2 cursor-pointer"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {iconMap[interest.icon] || <Compass size={32} className="text-[#D4AF37]" />}
            </div>
            <h3 className="font-medium text-[var(--color-text-main)] text-sm">{interest.name}</h3>
          </Card>
        ))}
      </div>
    </Section>
  );
}
