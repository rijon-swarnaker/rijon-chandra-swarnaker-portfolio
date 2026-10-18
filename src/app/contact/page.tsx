import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me | Portfolio",
  description: "Get in touch for web development projects, freelance opportunities, or technical inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-12">
      <ContactSection />
    </div>
  );
}