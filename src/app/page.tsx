import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-140px)]">
        <Hero />
        <Projects />
        <Experience />
        <Expertise />
        <Education />
      </main>
      <Footer />
    </>
  );
}
