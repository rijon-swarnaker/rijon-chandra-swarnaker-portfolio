


import Image from "next/image";
import { motion } from "motion/react";
import { Project } from "@/types/project";
import { ExternalLink, Code, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";


export default function ProjectCard({ project }: { project: Project }) {
  

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col h-130 justify-between rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 p-5 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 overflow-hidden"
    >
      <div >
        {/* Project Preview Image Container */}
        <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800/80">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className=" object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                <Code className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-white">{project.title}</p>
              <p className="text-xs text-slate-400">{project.category}</p>
            </div>
          )}

          {/* Category Tag Overlay */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex font-Share-Tech items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 border border-slate-700/80 text-cyan-300 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="mb-2 text-xl font-bold tracking-tight font-Exo text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="mb-5 text-sm font-Space-Grotesk text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies Badges */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-slate-800/80 border font-Share-Tech border-slate-700/60 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:text-white hover:border-cyan-500/40 hover:bg-slate-800"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
     
<div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
  {/* Live Demo Button */}
  
{project.liveUrl && (
  <>
    {/* Live Demo Button */}
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
    >
      <span>Live Demo</span>
      <ExternalLink className="w-3.5 h-3.5" />
    </motion.a>

    {/* GitHub Repo Button */}
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 border border-slate-700/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all"
    >
      <GithubIcon className="w-4 h-4" />
      <span>GitHub Repo</span>
    </motion.a>
  </>
)}

  

  {/* No Links Available */}
  {!project.liveUrl && !project.githubUrl && (
    <span className="text-xs text-slate-400 italic">
      Links coming soon
    </span>
  )}
</div>

    </motion.article>
  );
}