import Section from "./ui/Section";
import Card from "./ui/Card";
import { PersonalInfo, ReligiousInfo } from "@/types";
import { User, Heart, Info, Book, Download } from "lucide-react";

interface AboutSectionProps {
  personal: PersonalInfo;
  religious: ReligiousInfo;
}

export default function AboutSection({ personal, religious }: AboutSectionProps) {
  return (
    <Section id="about" className="bg-gray-50/50" bgWhite={false}>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-main)] tracking-tight mb-4">
          About Me
        </h2>
        <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
      </div>

      <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto mb-8">
        <Card className="md:col-span-3">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <User className="text-[#D4AF37]" size={24} />
            <h3 className="text-xl font-medium text-[var(--color-text-main)]">My Story</h3>
          </div>
          <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
            {personal.about}
          </p>
        </Card>

        <Card className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <Heart className="text-[#D4AF37]" size={24} />
            <h3 className="text-xl font-medium text-[var(--color-text-main)]">Key Traits</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {personal.traits.map((trait, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-gray-100 text-[var(--color-text-main)] rounded-full text-sm font-medium shadow-sm transition-all hover:border-[#D4AF37]/30 hover:shadow-md"
              >
                {trait}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <Info className="text-[#D4AF37]" size={24} />
            <h3 className="text-xl font-medium text-[var(--color-text-main)]">Personal Details</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-[var(--color-text-muted)]">Date of Birth</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{personal.dob}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-[var(--color-text-muted)]">Height</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{personal.height}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-[var(--color-text-muted)]">Marital Status</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{personal.maritalStatus}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-[var(--color-text-muted)]">Eating Habits</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{personal.eatingHabits}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-[var(--color-text-muted)]">Physical Status</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{personal.physicalStatus}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-text-muted)]">Mother Tongue</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{personal.motherTongue}</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <Book className="text-[#D4AF37]" size={24} />
            <h3 className="text-xl font-medium text-[var(--color-text-main)]">Religious Background</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-[var(--color-text-muted)]">Religion</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{religious.religion}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-[var(--color-text-muted)]">Caste</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{religious.caste}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-[var(--color-text-muted)]">Subcaste</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{religious.subcaste}</span>
            </div>
            <div className="flex justify-between pb-4">
              <span className="text-[var(--color-text-muted)]">Star</span>
              <span className="font-medium text-[var(--color-text-main)] text-right">{religious.star}</span>
            </div>

            <a
              href="/Sandeep Horoscope.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 text-[var(--color-text-main)] rounded-xl font-medium border border-gray-100 hover:bg-slate-100 hover:border-gray-200 transition-all group mt-2"
            >
              <Download size={18} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
              Get My Horoscope
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
}
