import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Nav overHero />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}
