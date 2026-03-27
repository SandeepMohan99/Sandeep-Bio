"use client";

import { ContactInfo } from "@/types";
import { MessageCircle, Phone, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  data: ContactInfo;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#FAFAFA] pt-16 pb-8 border-t border-gray-100">
      <div className="mx-auto max-w-5xl px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          <div>
            <h2 className="text-3xl font-semibold text-[var(--color-text-main)] mb-2">Let's Connect</h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              Open to conversations and discussing the possibilities of a shared future.
            </p>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${data.email}`}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase">Email</p>
                  <p className="text-[var(--color-text-main)] font-medium">{data.email}</p>
                </div>
              </a>

              <a 
                href={`tel:${data.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase">Phone</p>
                  <p className="text-[var(--color-text-main)] font-medium">{data.phone}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <a 
              href={`https://wa.me/${data.whatsapp.replace(/\D/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#20BE5C] hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </a>

            <div className="relative w-48 h-48 border border-gray-200 rounded-xl flex items-center justify-center bg-white shadow-sm overflow-hidden p-2">
               <Image 
                 src="/qr-code-v1.png"
                 alt="WhatsApp QR Code"
                 fill
                 className="object-contain p-2"
                 sizes="192px"
               />
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Sandeep Mohan. All rights reserved.
          </p>
          
          <a 
            href="#top" 
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--color-text-main)] hover:border-[var(--color-text-main)] transition-colors"
            aria-label="Back to top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
