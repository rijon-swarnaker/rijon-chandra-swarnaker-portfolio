import ProjectsSection from "@/components/ProjectsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Explore my latest web development projects, full-stack applications, and open-source contributions.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-12">
      <ProjectsSection />
    </div>
  );
}
