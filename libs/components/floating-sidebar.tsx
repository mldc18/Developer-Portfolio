import { SiLinkedin, SiGithub, SiMaildotru } from "react-icons/si";
import styled from "styled-components";

const FloatingSidebarContainer = styled.div.attrs({
  className: `
  fixed top-0 right-0 md:left-0 md:top-2/4 md:-translate-y-2/4 
  h-3/4 md:w-12 space-x-2 md:space-x-0 
  flex flex-row md:flex-col 
  justify-center px-4 mt-2
  text-4xl text-[#bad985] `,
})``;

const FloatingSidebar = () => {
  return (
    <FloatingSidebarContainer>
      <SiGithub className="hover:text-black hover:scale-150 transition ease-in-out duration-300 cursor-pointer my-2" />
      <SiLinkedin className="hover:text-[#0E76A8] hover:scale-150 transition ease-in-out duration-300 cursor-pointer my-2" />
      <SiMaildotru className="hover:text-red-500 hover:scale-150 transition ease-in-out duration-300 cursor-pointer my-2" />
    </FloatingSidebarContainer>
  );
};

export default FloatingSidebar;
