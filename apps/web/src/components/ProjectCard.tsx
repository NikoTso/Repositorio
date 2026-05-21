import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;

  skills: {
    skill: {
      name: string;
    };
  }[];
};

export function ProjectCard({
  title,
  description,
  skills,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="
        group
        relative
        overflow-hidden
        border border-zinc-800
        bg-zinc-900/30
        rounded-3xl
        p-8
        hover:border-zinc-600
        transition
      "
    >

      <div
        className="
        group
        relative
        overflow-hidden
        border border-zinc-800
        bg-zinc-900/30
        backdrop-blur-sm
        rounded-3xl
        p-8
        hover:border-zinc-600
        transition
        "
      />

      <h3 className="text-3xl font-semibold text-white relative z-10"> 
        {title}
      </h3>

      <p className="text-zinc-400 mt-4 leading-relaxed relative z-10">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6 relative z-10">

        {skills.map((s) => (
          <span
            key={s.skill.name}
            className="
              bg-zinc-950
              border border-zinc-800
              px-3 py-1
              rounded-full
              text-sm
              text-zinc-300
            "
          >
            {s.skill.name}
          </span>
        ))}

      </div>

      <button
        className="
          mt-8
          text-sm
          text-zinc-300
          hover:text-white
          transition
          relative z-10
        "
      >
        View Project →
      </button>

    </motion.div>
  );
}