import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[1200px] snap-center bg-[#292929] p-9 hover:opacity-100 opacity-40">
      <motion.img
        src="/images/altimetrik.png"
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center top-10"
        alt="Experience"
      />
      <div className="px-10 md:px-10">
        <h4 className="text-3xl font-light">Software Engineer</h4>
        <p className="font-bold text-1xl mt-1">Altimetrik India Pvt Ltd</p>
        <div className="flex space-x-2 my-2">
          {' '}
          <img
            className="h-10 w-10 rounded-full"
            src="/images/java.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/images/docker.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/images/kubernates.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/images/nextjs.png"
            alt=""
          />
        </div>
        <ul className="list-disc space-y-2 ml-5 text-xs">
          <li>
            Managed Docker orchestration and Docker containerization using
            Kubernetes.
          </li>
          <li>
            Used Kubernetes to orchestrate the deployment, scaling and
            management of Docker Containers.
          </li>
          <li>Implemented Rest API of Micro Services using Spring Boot</li>
          <li>
            Developing Microservices using Spring Boot, Netflix OSS(Zuul,
            Eureka, Ribbon, Hystrix) and followed domain driven design.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
