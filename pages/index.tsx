import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkingExperience from '../components/WorkingExperience';

const Home: NextPage = () => {
  return (
    <div className="bg-stone-900 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section className="snap-start" id="contactus">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
