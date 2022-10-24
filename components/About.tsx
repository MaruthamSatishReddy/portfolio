import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200 }}
        transition={{ duration: 1.5 }}
        src="/images/profile3.jpg"
        className="mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 md:ml-[390px]"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-sm font-semibold">
          Here is <span className="underline decoration">Satish Marutham </span>
          Having 7 years of experience in software development with
          specialization in middleware application development using
          CoreJava,Spring MVC, Spring Boot,
          JPA,Jenkins,Demandware,SonarQube,Docker,Kubernates,NextJs,Mongodb,MicroServices.
        </h4>
      </div>
    </div>
  );
}

export default About;
