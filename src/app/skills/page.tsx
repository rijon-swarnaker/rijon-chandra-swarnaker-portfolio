import SkillsSection from "@/components/SkillsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Technologies | Portfolio",
  description: "Explore my frontend, backend, database, and devops technical proficiency and tool stack.",
};

export default function SkillsPage() {
  return (
    <div className="pt-12">
      <SkillsSection />
    </div>
  );
}