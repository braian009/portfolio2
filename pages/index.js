import Head from "next/head";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Personal portfolio where you can find overall info about me and my journey in coding."
        />
        <meta
          name="keywords"
          content="portfolio, developer, frontend, backend, python, django, react, nextjs, redux, HTML, CSS"
        />
        <meta name="author" content="Braian Yanquin" />
        <title>Braian Yanquin</title>
      </Head>
      <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </>
  );
}
