import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Python",
  "Java",
  "Unity",
  "Docker",
  "Git",
];

export function Skills() {
  return (
    <motion.section
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4 mt-12">

        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-zinc-800 bg-zinc-900/40 px-5 py-3 rounded-2xl hover:border-zinc-600 transition"
          >
            {skill}
          </div>
        ))}

      </div>

    </motion.section>
  );
}