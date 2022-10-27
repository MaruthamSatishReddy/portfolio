import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40  cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        src="/images/profile3.jpg"
        className="w-32 h-32 rounded-full xl:w-[200px] xl-h[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Altimetrik India Pvt Ltd </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="/images/profile1.jpeg"
            alt=""
          ></img>
          <img
            className="h-10 w-10 rounded-full"
            src="/images/profile1.jpeg"
            alt=""
          ></img>
          <img
            className="h-10 w-10 rounded-full"
            src="/images/profile1.jpeg"
            alt=""
          ></img>
        </div>
        <p className="uppercase py-5 text-gray-500">StartDate EndDate</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summery Point</li>
          <li>Summery Point</li>
          <li>Summery Point</li>
          <li>Summery Point</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
