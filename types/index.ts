export interface Interest {
  name: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  photoUrl: string;
  location: string;
  about: string;
  traits: string[];
  dob: string;
  height: string;
  maritalStatus: string;
  eatingHabits: string;
  physicalStatus: string;
  motherTongue: string;
}

export interface ReligiousInfo {
  religion: string;
  caste: string;
  subcaste: string;
  star: string;
}

export interface ProfessionalInfo {
  title: string;
  company: string;
  skills: string[];
  story: string;
}

export interface FamilyInfo {
  father: string;
  fatherName: string;
  mother: string;
  motherName: string;
  sister: string;
  sisterName: string;
  type: string;
}

export interface LifestyleInfo {
  interests: Interest[];
}

export interface ExpectationsInfo {
  traits: string[];
  description: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
}

export interface ProfileData {
  personal: PersonalInfo;
  religious: ReligiousInfo;
  professional: ProfessionalInfo;
  family: FamilyInfo;
  lifestyle: LifestyleInfo;
  gallery: string[];
  expectations: ExpectationsInfo;
  contact: ContactInfo;
}
