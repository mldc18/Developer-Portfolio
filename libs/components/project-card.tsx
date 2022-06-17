import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

type ProjectCardProps = {
  children: React.ReactNode;
  imageSrc: string;
  projectDescription: string;
  projectName: string;
  projectUrl: string;
};

const TechstackContainer = styled.div.attrs({
  className: `
    flex justify-center lg:justify-start 
    space-x-3 md:space-x-5 
    text-2xl md:text-5xl text-[#bad985] 
    w-3/4 sm:w-full mt-4 lg:mt-8`,
})``;

const ProjectCard = (props: ProjectCardProps) => {
  const { children, imageSrc, projectDescription, projectName, projectUrl } =
    props;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 px-5 tracking-tighter">
      <div className="max-w-[450px] max-h-[300px] block mt-5 mx-8">
        <Image
          className="rounded-lg"
          src={imageSrc}
          placeholder="blur"
          blurDataURL={imageSrc}
          layout="responsive"
          width={450}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center lg:items-start relative md:ml-3 md:mt-5 w-full lg:w-[500px] lg:max-w-[500px] text-center lg:text-left">
        <div className="text-2xl sm:text-3xl font-Rubik text-white mt-4 md:mt-0">
          {projectName}
        </div>
        <div className="text-lg sm:text-xl font-Karla text-slate-500 lg:mt-5">
          {projectDescription} Built using the following:
        </div>
        <TechstackContainer>{children}</TechstackContainer>
        <div className="text lg sm:text-xl font-Karla text-white mt-5 lg:mt-10">
          <Link href={projectUrl} passHref>
            <a target="_blank">
              Live Site:{" "}
              <span className="text-sky-400 underline">{projectUrl}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
