import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav overHero />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
