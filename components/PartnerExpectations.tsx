import Section from "./ui/Section";
import { ExpectationsInfo } from "@/types";
import { Check, Download } from "lucide-react";

interface PartnerExpectationsProps {
  data: ExpectationsInfo;
}

export default function PartnerExpectations({ data }: PartnerExpectationsProps) {
  return (
    <Section id="expectations">
      <div className="max-w-4xl mx-auto bg-[#1E293B] rounded-[2rem] p-8 md:p-16 text-center transform hover:scale-[1.01] transition-transform duration-500 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-[0.05] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-[0.02] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-8 text-balance">
            Looking for a meaningful connection <span className="text-[#D4AF37]">that grows into a loving life partnership</span>
          </h2>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            "{data.description}"
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {data.traits.map((trait, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white text-sm font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <Check size={12} className="text-[#D4AF37]" />
                </div>
                {trait}
              </div>
            ))}
          </div>

          <div className="flex justify-center border-t border-white/10 pt-10">
            <a 
              href="/Sandeep_Bio.pdf" 
              download
              className="flex items-center gap-2 md:gap-3 bg-[#D4AF37] text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-medium text-base md:text-lg hover:bg-[#c5a030] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Download size={20} className="md:w-6 md:h-6" />
              <span>Get My Bio Data</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
