import Section from "./ui/Section";
import Card from "./ui/Card";
import { ProfessionalInfo } from "@/types";
import { Briefcase, Code, GraduationCap, ChevronRight } from "lucide-react";

interface ProfessionalJourneyProps {
  data: ProfessionalInfo;
}

export default function ProfessionalJourney({ data }: ProfessionalJourneyProps) {
  return (
    <Section id="career">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-main)] tracking-tight mb-4">
          Professional Journey
        </h2>
        <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
        <p className="text-[var(--color-text-muted)] text-lg">
          Driven by a continuous growth mindset, transforming complex problems into elegant digital solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Career Timeline */}
        <Card className="relative">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <Briefcase className="text-[#D4AF37]" size={24} />
            <h3 className="text-xl font-medium text-[var(--color-text-main)]">Experience</h3>
          </div>

          <div className="relative border-l-2 border-gray-100 pl-6 pb-2 space-y-8">
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#D4AF37]"></div>
              <h4 className="text-lg font-medium text-[var(--color-text-main)]">{data.title}</h4>
              <p className="text-[var(--color-primary-dark)] text-sm font-medium mb-3">{data.company}</p>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                {data.story}
              </p>
            </div>
            
            {/* Can add another timeline item here in the future if needed */}
          </div>
        </Card>

        {/* Skills & Expertise */}
        <Card className="relative">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <Code className="text-[#D4AF37]" size={24} />
            <h3 className="text-xl font-medium text-[var(--color-text-main)]">Expertise</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-100 group hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 transition-colors"
              >
                <ChevronRight size={16} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-medium text-slate-700">{skill}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-4">
            <GraduationCap className="text-slate-400 shrink-0" size={24} />
            <div>
              <p className="font-medium text-[var(--color-text-main)] text-sm mb-1">Continuous Learner</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Regularly exploring new frontend architectures and ecosystem tools to build better experiences.
              </p>
            </div>
          </div>
        </Card>

      </div>
    </Section>
  );
}
