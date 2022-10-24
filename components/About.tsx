import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-sm">Here is Satish Marutham</h4>
        <p className="text-base">
          Having 7 years of experience in software development with
          specialization in middleware application development using
          CoreJava,Spring MVC, Spring Boot,
          JPA,Jenkins,Demandware,SonarQube,Docker,Kubernates,NextJs,Mongodb,MicroServices.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
