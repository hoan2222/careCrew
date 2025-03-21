import Landing from "@/components/landing";
import About from "@/components/about";
import Join from "@/components/join";
import Concept from "@/components/concept";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <div id="home">
        <Landing />
      </div>

      <div id="about-us">
        <About />
      </div>

      <div id="our-concept">
        <Concept />
      </div>
      <div id="projects">
        <Projects />
      </div>

      <Join />
    </div>
  );
}
