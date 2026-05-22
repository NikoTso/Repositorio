import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section
        id="home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-24 md:py-32">

      <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
        Software Engineer
      </p>

      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mt-6 leading-none">
        Gabriel <br />
        Oliveira
      </h1>

      <p className="text-zinc-400 text-lg mt-8 max-w-2xl leading-relaxed">
        Building fullstack applications, APIs and interactive experiences.
      </p>

      <div className="flex gap-4 mt-10 flex-wrap">

        <a
          href="https://github.com/NikoTso/"
          target="_blank"
          className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/gabrielolimed/"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-2xl hover:opacity-80 transition"
        >
          LinkedIn
        </a>

      </div>

    </motion.section>
  );
}