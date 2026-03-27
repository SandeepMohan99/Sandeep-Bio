import Section from "./ui/Section";
import Card from "./ui/Card";
import { FamilyInfo } from "@/types";
import { Users, Home, ShieldCheck } from "lucide-react";

interface FamilyBackgroundProps {
  data: FamilyInfo;
}

export default function FamilyBackground({ data }: FamilyBackgroundProps) {
  return (
    <Section id="family" bgWhite={false}>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-main)] tracking-tight mb-4">
          Family Background
        </h2>
        <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
        <p className="text-[var(--color-text-muted)] text-lg">
          Rooted in strong traditional values while embracing modern pragmatism. A close-knit {data.type.toLowerCase()} family.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Father */}
        <Card className="text-center group">
          <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
            <ShieldCheck className="text-slate-400 group-hover:text-[#D4AF37] transition-colors" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-1">{data.fatherName}</h3>
          <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium mb-2">Father</p>
          <p className="text-[var(--color-text-muted)] text-sm">{data.father}</p>
        </Card>

        {/* Mother */}
        <Card className="text-center group">
          <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
            <Home className="text-slate-400 group-hover:text-[#D4AF37] transition-colors" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-1">{data.motherName}</h3>
          <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium mb-2">Mother</p>
          <p className="text-[var(--color-text-muted)] text-sm">{data.mother}</p>
        </Card>

        {/* Sister */}
        <Card className="text-center group">
          <div className="w-16 h-16 mx-auto rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
            <Users className="text-slate-400 group-hover:text-[#D4AF37] transition-colors" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-1">{data.sisterName}</h3>
          <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium mb-2">Sister</p>
          <p className="text-[var(--color-text-muted)] text-sm">{data.sister}</p>
        </Card>

      </div>
    </Section>
  );
}
