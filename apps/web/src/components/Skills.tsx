import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Skill = {
  id: string;
  name: string;
  category: string;
  level: number;
};

export function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const apiUrl = (import.meta as any).env.VITE_API_URL || "http://localhost:3000";

    fetch(`${apiUrl}/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold">Skills</h2>

      <div className="flex flex-wrap gap-4 mt-12">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="border border-zinc-800 bg-zinc-900/40 px-5 py-3 rounded-2xl hover:border-zinc-600 transition"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </motion.section>
  );
}