"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail, Code2, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.12,
            delayChildren: 0.1,
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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
          },
    },
  };

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-160 h-112 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.12),rgba(255,255,255,0))] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status / Role Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex font-Exo items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900/80 border border-cyan-500/30 text-cyan-300 shadow-sm shadow-cyan-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-3xl font-Exo font-medium  text-slate-300  mb-2"
            >
              
              Hi, I&apos;m{" "}
              <span className="text-white text-2xl  font-bold sm:text-4xl tracking-tight">
                Rijon Chandra Swarnaker
              </span>
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl  sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              <span className="bg-linear-to-r font-Exo from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Aspiring Full-Stack Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg font-Space-Grotesk text-slate-300 mb-2 max-w-2xl leading-relaxed"
            >
              Building modern web experiences with clean code, thoughtful design, and a passion for learning.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg font-Space-Grotesk  text-slate-300 mb-8 max-w-2xl leading-relaxed"
            >
              I&apos;m a Computer Science student passionate about building responsive, user-friendly web applications with React and Next.js, while expanding my skills in backend development and database technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 w-full mb-10  "
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="/projects"
                  // onClick={(e) => handleScrollTo(e, "projects")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:px-6 py-3.5 rounded-xl font-semibold text-sm bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="/contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-slate-500 hover:bg-slate-850 transition-all duration-200"
                >
                  <span>Contact Me</span>
                  <Mail className="w-4 h-4 text-cyan-400" />
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-4 border-t border-slate-800/80 w-full"
            >
              <span className="text-xs font-Exo font-semibold uppercase tracking-wider text-slate-300">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://github.com/rijon-swarnaker"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rijon-swarnaker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="mailto:rijonswarnaker@gmail.com"
                  aria-label="Email Me"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual with Animated Floaters */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Pulsing Ambient Backlight glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform -rotate-3 scale-95 pointer-events-none" />

            {/* Profile Card Container */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.92, y: 20 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl p-2 bg-linear-to-b from-slate-700/40 via-slate-800/40 to-slate-900/60 border border-slate-700/60 backdrop-blur-xl shadow-2xl overflow-hidden group max-w-sm sm:max-w-md w-full"
            >
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/HeroSection1.png"
                  alt="Rijon Chandra Swarnaker - Aspiring Full-Stack Developer"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 420px"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-transparent to-transparent opacity-80" />

                {/* Card overlay badge */}
              </div>
            </motion.div>

            {/* Floating Decorative Element 1: Tech Badge */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -10, 0],
                      rotate: [0, 2, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-4 sm:-left-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/30 shadow-xl backdrop-blur-md pointer-events-none"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 leading-none">
                  Focus &amp; Goal
                </p>
                <p className="text-xs font-Exo font-semibold text-white">
                  Full-Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Floating Decorative Element 2: Performance Badge */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, 10, 0],
                      rotate: [0, -2, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-6 -right-4 sm:-right-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-blue-500/30 shadow-xl backdrop-blur-md pointer-events-none"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left font-Exo">
                <p className="text-[10px] text-slate-400 leading-none">
                  Design
                </p>
                <p className="text-xs font-semibold text-white">
                  Modern &amp; Responsive
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
