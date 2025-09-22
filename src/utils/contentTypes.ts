import type { SVGProps } from "react";
import type React from "react";

interface NavigationLink {
  id: number;
  link: string;
  href: string;
}

interface Review {
  id: number;
  src: URL;
  alt: string;
}

interface Logo {
  id: number;
  src: URL;
  alt: string;
}

interface svgProps extends SVGProps<SVGSVGElement> {
  width?: string;
  className?: string;
  alt?: string;
  activeQuestion: boolean; // optional
}

interface Question {
  id: number;
  alt: string;
  Icon: ({ width, className, alt }: svgProps) => React.JSX.Element;
  question: string;
  answer: string;
}

interface FrequentlyAskedQuestion {
  category: "General" | "Pricing" | "Features" | "Integrations";
  id: number;
  questions: Question[];
}

interface Testimonial {
  id: number;
  rating: number;
  description: string;
  src: URL;
  name: string;
  title: string;
}

interface FooterCol {
  id: number;
  category: string;
  links: string[];
}

interface Feature {
  SmartOrganization: {
    alt: string;
    heading: string;
    description: string;
  };
  ContextualReminders: {
    alt: string;
    heading: string;
    description: string;
  };
}

export type {
  NavigationLink,
  Review,
  Logo,
  FrequentlyAskedQuestion,
  Question,
  Testimonial,
  FooterCol,
  Feature,
};
