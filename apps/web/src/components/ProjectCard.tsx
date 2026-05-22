import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  repoUrl?: string;
  liveUrl?: string;
  skills: {
    skill: {
      name: string;
    };
  }[];
};

export function ProjectCard({
  title,
  description,
  repoUrl,
  liveUrl,
  skills,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="
        relative overflow-hidden
        border border-zinc-800 bg-zinc-900/30
        rounded-3xl p-8
        hover:border-zinc-600 transition
      "
    >
      <h3 className="text-3xl font-semibold text-white">{title}</h3>

      <p className="text-zinc-400 mt-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mt-6">
        {skills.map((s) => (
          <span
            key={s.skill.name}
            className="bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-full text-sm text-zinc-300"
          >
            {s.skill.name}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition"
          >
            GitHub →
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition"
          >
            Live →
          </a>
        )}
      </div>
    </motion.div>
  );
}