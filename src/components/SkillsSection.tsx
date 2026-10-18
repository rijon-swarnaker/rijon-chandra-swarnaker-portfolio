"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  Server,
  Wrench,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Globe,
  Palette,
  Terminal,
  GitBranch,
  ShieldCheck,
  Zap,
} from "lucide-react";

type SkillCategory = "frontend" | "backend" | "tools";

interface SkillItem {
  name: string;
  level: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const SKILLS_DATA: Record<SkillCategory, SkillItem[]> = {
  frontend: [
    {
      name: "React 19",
      level: "Advanced",
      description: "Server & Client components, Hooks, Concurrent Features",
      icon: Code,
      tag: "Library",
    },
    {
      name: "Next.js ",
      level: "Advanced",
      description: "SSR, SSG, Turbopack, Layouts, Server Actions & Route Handlers",
      icon: Globe,
      tag: "Framework",
    },
    {
      name: "TypeScript",
      level: "Advanced",
      description: "Strict typing, Generics, interfaces, type inference & guards",
      icon: ShieldCheck,
      tag: "Language",
    },
    {
      name: "Tailwind CSS v4",
      level: "Expert",
      description: "Modern utility-first styling, CSS variables, dark mode & responsive layouts",
      icon: Palette,
      tag: "Styling",
    },
    {
      name: "HTML5 & Semantic Web",
      level: "Expert",
      description: "Accessible markup, SEO best practices, Core Web Vitals optimization",
      icon: Layers,
      tag: "Core",
    },
  ],
  backend: [
    {
      name: "Node.js",
      level: "Proficient",
      description: "Event-driven runtime, asynchronous architecture, REST endpoints",
      icon: Server,
      tag: "Runtime",
    },
    {
      name: "Express.js",
      level: "Proficient",
      description: "Middleware architecture, API routing, error handling & security",
      icon: Cpu,
      tag: "Framework",
    },
    {
      name: "MongoDB & Mongoose",
      level: "Proficient",
      description: "Document modeling, indexing, aggregation pipelines & data validation",
      icon: Database,
      tag: "Database",
    },
  ],
  tools: [
    {
      name: "Git & GitHub",
      level: "Advanced",
      description: "Branching strategies, pull requests, version control & code review",
      icon: GitBranch,
      tag: "VCS",
    },
    {
      name: "Turbopack & Vite",
      level: "Proficient",
      description: "Fast bundling, HMR, modern build pipelines & environment configurations",
      icon: Zap,
      tag: "Build Tool",
    },
    {
      name: "VS Code & Terminal",
      level: "Expert",
      description: "Power user workflows, CLI tooling, debugging & extensions",
      icon: Terminal,
      tag: "Workflow",
    },
    {
      name: "Vercel & Netlify",
      level: "Advanced",
      description: "Continuous deployment, preview branches, serverless functions & DNS",
      icon: Wrench,
      tag: "Cloud",
    },
  ],
};

const TABS: { id: SkillCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend & Database", icon: Server },
  { id: "tools", label: "Tools & DevOps", icon: Wrench },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("frontend");

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center  max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex font-Share-Tech items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack &amp; Skills</span>
          </div>
          <h2 className="text-3xl font-Exo sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Technical Proficiency
          </h2>
          <p className="text-slate-400 font-Space-Grotesk text-base sm:text-lg leading-relaxed">
            A comprehensive overview of the modern programming languages, libraries, and frameworks I use to build scalable products.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl font-Exo bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border border-cyan-500/40 rounded-xl -z-10 shadow-sm shadow-cyan-500/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Skills Grid with Tab Change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SKILLS_DATA[activeTab].map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full font-Share-Tech text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {skill.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-Exo font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {skill.name}
                  </h3>


                  <p className="text-sm font-Space-Grotesk text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
