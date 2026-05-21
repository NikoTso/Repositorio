import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)]
          bg-[size:40px_40px]
          opacity-20
        "
      />

      <div
        className="
          absolute top-[-200px] left-1/2
          -translate-x-1/2
          w-[700px] h-[700px]
          bg-white/5
          rounded-full
          blur-3xl
        "
      />

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <Projects />

        <Skills />

        <Footer />

      </div>

    </main>
  );
}