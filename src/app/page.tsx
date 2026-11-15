import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Nav overHero />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Stack />
      </main>
    </>
  );
}
