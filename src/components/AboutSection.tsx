"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Sparkles,
  Smartphone,
  Layers,
  Search,
  Cpu,
  ShieldCheck,
  Mail,
  Download,
  GraduationCap,
  MapPin,
  Check,
} from "lucide-react";

interface ContributionItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CONTRIBUTIONS: ContributionItem[] = [
  {
    title: "Responsive Frontend Development",
    description: "Designing fluid, mobile-first layouts that function seamlessly across any device and viewport.",
    icon: Smartphone,
  },
  {
    title: "Reusable UI Components",
    description: "Developing clean, maintainable, and type-safe component libraries with modular CSS.",
    icon: Layers,
  },
  {
    title: "Search and Filtering",
    description: "Implementing fast search algorithms and multi-category filtering for enhanced data discovery.",
    icon: Search,
  },
  {
    title: "API Integration",
    description: "Connecting frontend interfaces with asynchronous RESTful APIs, data validation, and error states.",
    icon: Cpu,
  },
  {
    title: "Authentication Fundamentals",
    description: "Understanding secure login flows, session handling, protected routes, and token validation.",
    icon: ShieldCheck,
  },
];

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const [copiedCvMessage, setCopiedCvMessage] = useState(false);

  // Smooth scroll handler
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  const handleCvClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If no dedicated PDF file exists, provide a friendly message and redirect to contact
    e.preventDefault();
    setCopiedCvMessage(true);
    setTimeout(() => setCopiedCvMessage(false), 3000);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.1,
          },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          },
    },
  };

  return (
    <section id="about" className="py-15 relative overflow-hidden bg-slate-950/60 scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Presentation */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 via-blue-500/15 to-transparent rounded-3xl blur-2xl transform -rotate-2 scale-95 pointer-events-none" />

            <div className="relative rounded-3xl p-2 bg-linear-to-b from-slate-700/40 via-slate-800/40 to-slate-900/60 border border-slate-700/60 backdrop-blur-xl shadow-2xl overflow-hidden group">
              <div className="relative aspect-4/3 sm:aspect-4/4 rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/AboutSection.png"
                  alt="Rijon Chandra Swarnaker - Development Journey"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-transparent to-transparent opacity-70" />

                {/* Status Badges Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-white">CS Student</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Narrative & Highlights */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Section Label */}
            <div className="mb-3">
              <span className="inline-flex font-Share-Tech items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                ABOUT ME
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-Exo lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Turning Ideas Into{" "}
              <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h2>

            {/* Description */}
<motion.div
  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  className="mb-8"
>
  <div className="space-y-3 text-[15px] font-Space-Grotesk sm:text-base lg:text-[17px] leading-8 text-slate-300">
    <p>
      I&apos;m a Computer Science student from Bangladesh and an aspiring{" "}
      <span className="font-medium text-white">
        Full-Stack Developer
      </span>{" "}
      passionate about building modern, responsive, and user-friendly web
      applications.
    </p>

    <p>
      I build interactive user interfaces using{" "}
      <span className="font-medium text-cyan-300">
        React, Next.js, JavaScript, and TypeScript
      </span>
      . I&apos;m also expanding my backend development skills with{" "}
      <span className="font-medium text-blue-300">
        Node.js, Express.js, and MongoDB
      </span>
      , while exploring API development, authentication, and database
      management.
    </p>

    <p>
      Through hands-on projects, I&apos;m continuously improving my problem-solving
      skills, writing maintainable code, and learning to build{" "}
      <span className="font-medium text-white">
        reliable, scalable, and full-stack web applications.
      </span>
    </p>
  </div>

  {/* Technology Chips */}
  <div className="mt-7 flex flex-wrap gap-2">
    {[
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ].map((skill, index) => (
      <motion.span
        key={skill}
        initial={
          shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: shouldReduceMotion ? 0 : index * 0.07 }}
        className="rounded-full border border-slate-700/80 font-Share-Tech bg-slate-900/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
      >
        {skill}
      </motion.span>
    ))}
  </div>
</motion.div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              >
                <a
                  href="/contact"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <span>Get in Touch</span>
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              >
                <a
                  href="/contact"
                  onClick={handleCvClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-slate-500 hover:bg-slate-850 transition-all duration-200"
                  title="Request CV"
                >
                  {copiedCvMessage ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Request CV below!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-cyan-400" />
                      <span>Download CV</span>
                    </>
                  )}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contribution Highlights Cards */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-Exo text-white tracking-tight">
              Key Focus &amp; Practical Contributions
            </h3>
            <p className="text-sm font-Space-Grotesk  text-slate-400 mt-1">
              Areas where I apply modern software engineering practices to ship real results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {CONTRIBUTIONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 group shadow-sm hover:shadow-cyan-500/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <h4 className="text-base font-bold text-white font-Exo group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 font-Space-Grotesk leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
