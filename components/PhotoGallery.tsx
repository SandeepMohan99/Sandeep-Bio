"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./ui/Section";
import { X } from "lucide-react";

interface PhotoGalleryProps {
  gallery: string[];
}

export default function PhotoGallery({ gallery }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="gallery" bgWhite={false}>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-main)] tracking-tight mb-4">
          Photo Gallery
        </h2>
        <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {gallery.map((img, index) => (
          <div 
            key={index} 
            className="group relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={36} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl h-[80vh] bg-transparent rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full Screen View"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </Section>
  );
}
