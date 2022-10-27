import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkingExperience from '../components/WorkingExperience';

const Home: NextPage = () => {
  return (
    <div className="bg-stone-900 text-white snap-y snap-mandatory">
      <Head>
        <title>Satish Marutham</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="workingexperience" className="snap-center">
        <WorkingExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-end">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
