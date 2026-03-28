import Section from "./ui/Section";
import Card from "./ui/Card";
import { ProfessionalInfo } from "@/types";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

interface ProfessionalJourneyProps {
  data: ProfessionalInfo;
}

export default function ProfessionalJourney({ data }: ProfessionalJourneyProps) {
  return (
    <Section id="career">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-(--color-text-main) tracking-tight mb-4">
          Professional Journey
        </h2>
        <div className="h-1 w-20 bg-(--color-primary) mx-auto rounded-full mb-6"></div>
        <p className="text-(--color-text-muted) text-lg">
          Driven by a continuous growth mindset, transforming complex problems into elegant digital solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Career Timeline */}
        <Card className="relative">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <Briefcase className="text-[#D4AF37]" size={24} />
            <h3 className="text-xl font-medium text-(--color-text-main)">Experience</h3>
          </div>

          <div className="relative border-l-2 border-gray-100 pl-6 pb-2 space-y-8">
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#D4AF37]"></div>
              <h4 className="text-lg font-medium text-(--color-text-main)">{data.title}</h4>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                <p className="text-(--color-primary-dark) text-sm font-medium">{data.company}</p>
                <div className="flex items-center gap-1.5 text-(--color-text-muted) text-[13px] bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                  <MapPin size={13} className="text-[#D4AF37]" />
                  <span>{data.location}</span>
                </div>
              </div>
              <p className="text-(--color-text-muted) leading-relaxed text-sm">
                {data.story}
              </p>
            </div>

            {/* Can add another timeline item here in the future if needed */}
          </div>
        </Card>

        {/* Education Timeline */}
        <Card className="relative">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <GraduationCap className="text-[#D4AF37]" size={24} />
            <h3 className="text-xl font-medium text-(--color-text-main)">Education</h3>
          </div>

          <div className="relative border-l-2 border-gray-100 pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#D4AF37]"></div>
              <h4 className="text-lg font-medium text-(--color-text-main)">{data.education.degree}</h4>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                <p className="text-(--color-primary-dark) text-sm font-medium">{data.education.university}</p>
                <div className="flex items-center gap-1.5 text-(--color-text-muted) text-[13px] bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                  <MapPin size={13} className="text-[#D4AF37]" />
                  <span>{data.education.location}</span>
                </div>
              </div>
              <p className="text-(--color-text-muted) leading-relaxed text-sm">
                Completed my engineering degree with a focus on problem-solving and technical innovation.
              </p>
            </div>
          </div>
        </Card>

      </div>
    </Section>
  );
}
