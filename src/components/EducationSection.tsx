"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Code2,
  CalendarDays,
  Building2,
  Check,
} from "lucide-react";

type Accent = "cyan" | "blue" | "violet";

interface EducationItem {
  id: number;
  title: string;
  subtitle: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  /** Optional institution logo, e.g. "/logos/dpi.png" (file inside /public). Leave "" to hide. */
  image?: string;
  accent: Accent;
}

const education: EducationItem[] = [
  {
    id: 1,
    title: "Diploma in Engineering",
    subtitle: "Computer Science & Technology",
    institution: "Daffodil Polytechnic Institute",
    period: "2023 – Present",
    status: "Currently Studying",
    description:
      "Pursuing a Diploma in Computer Science & Technology, building a strong foundation in programming, software development, and computer science.",
    icon: GraduationCap,
    image: "https://daffodil.group/dfamily/images/familylogo/new/dpi-t.jpg",
    accent: "cyan",
  },
  {
    id: 2,
    title: "AI-Driven Full-Stack Web Engineering",
    subtitle: "Professional Training Program",
    institution: "Programming Hero",
    period: "July 2026 – Present",
    status: "In Progress",
    description:
      "Developing practical web development skills through hands-on projects using React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
    icon: Code2,
    image: "https://pbs.twimg.com/profile_images/1623230060055629825/IxI18R8Y_400x400.jpg",
    accent: "blue",
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    subtitle: "Science / General Education",
    institution: "Jorpukuria High School",
    period: "Completed in 2023",
    status: "Completed",
    description:
      "Completed secondary education with a GPA of 3.94.",
    icon: BookOpen,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDW8rQSHqpnqkHomVrxyyp0Pa7ybam0LwzGahefPTbFw&s",
    accent: "violet",
  },
];

// Full class names are written out so Tailwind can detect them at build time.
const ACCENTS: Record<
  Accent,
  {
    node: string;
    glow: string;
    ping: string;
    cardActive: string;
    cardHover: string;
    institution: string;
    periodIcon: string;
  }
> = {
  cyan: {
    node: "border-cyan-400/50 text-cyan-300",
    glow: "shadow-lg shadow-cyan-500/25",
    ping: "bg-cyan-400/30",
    cardActive: "border-cyan-500/30",
    cardHover: "hover:border-cyan-500/50",
    institution: "text-cyan-300",
    periodIcon: "text-cyan-400",
  },
  blue: {
    node: "border-blue-400/50 text-blue-300",
    glow: "shadow-lg shadow-blue-500/25",
    ping: "bg-blue-400/30",
    cardActive: "border-blue-500/30",
    cardHover: "hover:border-blue-500/50",
    institution: "text-blue-300",
    periodIcon: "text-blue-400",
  },
  violet: {
    node: "border-violet-400/50 text-violet-300",
    glow: "shadow-lg shadow-violet-500/25",
    ping: "bg-violet-400/30",
    cardActive: "border-violet-500/30",
    cardHover: "hover:border-violet-500/50",
    institution: "text-violet-300",
    periodIcon: "text-violet-400",
  },
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function EducationSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      id="education"
      aria-labelledby="education-heading"
      className="relative scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
    >
      <div className="pt-12 border-t border-slate-800/80">
        {/* Header */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-1 font-Share-Tech text-xs font-bold uppercase tracking-wider text-cyan-400">
            <GraduationCap className="h-3.5 w-3.5" />
            EDUCATION
          </span>

          <h2
            id="education-heading"
            className="font-Exo text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            My Academic{" "}
            <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mt-3 font-Space-Grotesk text-sm leading-relaxed text-slate-400 sm:text-base">
            The classrooms and training programs that shaped how I think,
            learn, and build software.
          </p>
        </motion.div>

        {/* Timeline */}
        <ol className="relative list-none">
          {/* Spine */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-linear-to-b from-cyan-500/60 via-blue-500/40 to-violet-500/30 md:left-1/2"
          />

          {education.map((item, index) => {
            const Icon = item.icon;
            const accent = ACCENTS[item.accent];
            const isLeft = index % 2 === 0;
            const isCompleted = item.status === "Completed";

            return (
              <li
                key={item.id}
                className="relative pb-10 pl-16 last:pb-0 md:pl-0"
              >
                {/* Node */}
                <div className="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2">
                  {!isCompleted && (
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-full motion-safe:animate-ping ${accent.ping}`}
                    />
                  )}
                  <div
                    className={`relative flex h-10 w-10 items-center justify-center rounded-full border bg-slate-900 ${accent.node} ${
                      isCompleted ? "" : accent.glow
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Connector to card (desktop only) */}
                <div
                  aria-hidden="true"
                  className={`absolute top-11 hidden h-px w-7 md:block ${
                    isLeft
                      ? "right-[calc(50%+1.25rem)] bg-linear-to-l from-slate-600/70 to-transparent"
                      : "left-[calc(50%+1.25rem)] bg-linear-to-r from-slate-600/70 to-transparent"
                  }`}
                />

                {/* Card */}
                <motion.article
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.6, ease: EASE }
                  }
                  className={`rounded-2xl border bg-slate-900/60 p-5 backdrop-blur-sm transition-colors duration-300 sm:p-6 md:w-[calc(50%-3rem)] ${
                    accent.cardHover
                  } ${isCompleted ? "border-slate-800/80" : accent.cardActive} ${
                    isLeft ? "" : "md:ml-auto"
                  }`}
                >
                  {/* Period + status */}
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1 font-Share-Tech text-xs font-medium text-slate-300">
                      <CalendarDays
                        className={`h-3.5 w-3.5 ${accent.periodIcon}`}
                      />
                      {item.period}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-Share-Tech text-xs font-medium ${
                        isCompleted
                          ? "border-slate-700/80 bg-slate-800/60 text-slate-400"
                          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                      {item.status}
                    </span>
                  </div>

                  {/* Title block (+ optional logo) */}
                  <div className="flex items-start gap-3">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`${item.institution} logo`}
                        width={800}
                        height={800}
                        className="h-25 w-25 shrink-0 object-cover rounded-lg border border-slate-700/80 bg-white/5  p-1"
                      />
                    ) : null}

                    <div className="min-w-0">
                      <h3 className="font-Exo text-lg font-bold leading-snug text-white">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 font-Space-Grotesk text-sm text-slate-300">
                        {item.subtitle}
                      </p>
                      <p
                        className={`mt-2 flex items-center gap-1.5 font-Space-Grotesk text-sm font-medium ${accent.institution}`}
                      >
                        <Building2 className="h-3.5 w-3.5 shrink-0" />
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 font-Space-Grotesk text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </motion.article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}