import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import FamilyBackground from "@/components/FamilyBackground";
import LifestyleInterests from "@/components/LifestyleInterests";
import PhotoGallery from "@/components/PhotoGallery";
import PartnerExpectations from "@/components/PartnerExpectations";
import Footer from "@/components/Footer";
import profileDataRaw from "@/data/profile.json";
import { ProfileData } from "@/types";

export default function Home() {
  const data = profileDataRaw as ProfileData;

  return (
    <main className="flex flex-col min-h-screen bg-white" id="top">
      <HeroSection data={data.personal} />
      <AboutSection personal={data.personal} religious={data.religious} />
      <ProfessionalJourney data={data.professional} />
      <FamilyBackground data={data.family} />
      <LifestyleInterests data={data.lifestyle} />
      <PhotoGallery gallery={data.gallery} />
      <PartnerExpectations data={data.expectations} />
      <Footer data={data.contact} />
    </main>
  );
}
