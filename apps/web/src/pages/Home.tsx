import {useState} from "react";
import {Loader} from "../components/Loader";
import {Navbar} from "../components/Navbar";
import {Hero} from "../components/Hero";
import {Projects} from "../components/Projects";
import {Skills} from "../components/Skills";
import {Footer} from "../components/Footer";

export function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main style={{ background: "#080808", color: "#e8e6e0", minHeight: "100vh", overflowX: "hidden" }}>
      <Loader onComplete={() => setLoaded(true)} />
      <Navbar visible={loaded} />
      <Hero visible={loaded} />
      <hr style={{ border: "none", borderTop: "1px solid #0f0f0f", margin: "0 48px" }} />
      <Projects />
      <hr style={{ border: "none", borderTop: "1px solid #0f0f0f", margin: "0 48px" }} />
      <Skills />
      <hr style={{ border: "none", borderTop: "1px solid #0f0f0f", margin: "0 48px" }} />
      <Footer />
    </main>
  );
}