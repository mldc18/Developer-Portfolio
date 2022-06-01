import {
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ImGit } from "react-icons/im";
import styled from "styled-components";

const TechstackContainer = styled.div.attrs({
  className: `
  flex items-center justify-center 
  space-x-3 md:space-x-5 
  text-3xl md:text-6xl text-[#bad985] 
  w-3/4 sm:w-full mt-5`,
})``;

const TechStacks = () => {
  return (
    <TechstackContainer>
      <FaReact className="hover:text-[#61dafb] cursor-pointer" />
      <SiNextdotjs className="hover:text-black cursor-pointer" />
      <SiJavascript className="hover:text-[#F0DB4F] cursor-pointer" />
      <SiTypescript className="hover:text-[#007acc] cursor-pointer" />
      <SiTailwindcss className="hover:text-sky-400 cursor-pointer " />
      <SiStyledcomponents className="hover:text-white cursor-pointer" />
      <ImGit className="hover:text-[#f14e32] cursor-pointer" />
    </TechstackContainer>
  );
};

export default TechStacks;
