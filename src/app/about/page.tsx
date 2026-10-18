import AboutSection from "@/components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Portfolio",
  description: "Learn more about my development journey, architectural mindset, and passion for building modern web applications.",
};

export default function AboutPage() {
  return (
    <div className="pt-12">
      <AboutSection />
    </div>
  );
}