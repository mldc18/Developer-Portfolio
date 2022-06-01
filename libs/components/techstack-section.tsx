import { Techstacks } from "../enums/techstacks";
import {
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiJavascript,
  SiLaravel,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ImGit } from "react-icons/im";
import styled from "styled-components";
import NewtabLink from "./newtab-link";

type TechstackSectionProps = {
  collection: Array<string>;
  hasSite?: boolean;
};

const Span = styled.span.attrs({
  className: `
  font-bold font-Rubik 
  text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-500
  text-center text-3xl mt-10 sm:mt-2`,
})``;

const TechstackContainer = styled.div.attrs({
  className: `
  text-4xl sm:text-3xl text-[#bad985]
  font-Karla flex justify-center 
  my-6 space-x-3 sm:space-x-5`,
})``;

const TechstackSection = (props: TechstackSectionProps) => {
  const { collection, hasSite = false } = props;

  const techstacks = collection.map((icon) => {
    switch (icon) {
      case Techstacks.REACT:
        return <FaReact className="hover:text-[#61dafb] cursor-pointer" />;
      case Techstacks.NEXT:
        return <SiNextdotjs className="hover:text-black cursor-pointer" />;
      case Techstacks.JAVASCRIPT:
        return <SiJavascript className="hover:text-[#F0DB4F] cursor-pointer" />;
      case Techstacks.TYPESCRIPT:
        return <SiTypescript className="hover:text-[#007acc] cursor-pointer" />;
      case Techstacks.TAILWIND:
        return <SiTailwindcss className="hover:text-sky-400 cursor-pointer " />;
      case Techstacks.STYLED_COMPONENTS:
        return (
          <SiStyledcomponents className="hover:text-white cursor-pointer" />
        );
      case Techstacks.GIT:
        return <ImGit className="hover:text-[#f14e32] cursor-pointer" />;
      case Techstacks.LARAVEL:
        return <SiLaravel className="hover:text-white cursor-pointer" />;
      case Techstacks.CSS:
        return <SiCss3 className="hover:text-white cursor-pointer" />;
      case Techstacks.HTML:
        return <SiHtml5 className="hover:text-white cursor-pointer" />;
    }
  });

  const siteLink = hasSite && (
    <Span>
      <NewtabLink href="https://www.boffistudiomanila.com/" text="VISIT SITE" />
    </Span>
  );

  return (
    <div className="text-center">
      <p className="text-2xl font-Karla mt-3 text-white">Tech Stack</p>
      <TechstackContainer>{techstacks}</TechstackContainer>
      {siteLink}
    </div>
  );
};

export default TechstackSection;
