import Link from "next/link";
import { SiLinkedin, SiGithub, SiMaildotru } from "react-icons/si";
import styled from "styled-components";

const FloatingSidebarContainer = styled.div.attrs({
  className: `
  fixed top-0 right-0 md:left-0 md:top-2/4 md:-translate-y-2/4 
  h-[100px] md:h-3/4 md:w-12 space-x-2 md:space-x-0 
  flex flex-row md:flex-col 
  justify-center px-4 mt-2
  text-4xl text-[#bad985] `,
})``;

function handleEmailClick() {
  navigator.clipboard.writeText("lesterdelacruz.dev@gmail.com");
}

const FloatingSidebar = () => {
  return (
    <FloatingSidebarContainer>
      <Link href="https://github.com/mldc18" passHref>
        <a target="_blank">
          <SiGithub className="hover:text-black hover:scale-125 transition ease-in-out duration-300 cursor-pointer my-2" />
        </a>
      </Link>
      <Link
        href="https://www.linkedin.com/in/lester-dela-cruz-63970823b/"
        passHref
      >
        <a target="_blank">
          <SiLinkedin className="hover:text-[#0E76A8] hover:scale-125 transition ease-in-out duration-300 cursor-pointer my-2" />
        </a>
      </Link>
      <div className="relative sm:w-[300px]">
        <div className="peer" onClick={handleEmailClick}>
          <SiMaildotru className="hover:text-red-500 hover:scale-125 transition ease-in-out duration-300 cursor-pointer my-2" />
        </div>
        <div className="absolute top-12 sm:-right-12 sm:top-4 sm:w-[300px] text-xs font-Karla font-bold peer-hover:visible invisible">
          copy email
        </div>
      </div>
    </FloatingSidebarContainer>
  );
};

export default FloatingSidebar;
