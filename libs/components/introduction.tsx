import ColoredHeader from "./colored-header";
import FloatingSidebar from "./floating-sidebar";
import TechStacks from "./tech-stacks";
import styled from "styled-components";
import NavItems from "./nav-items";

const JobTitle = styled.p.attrs({
  className: `
    text-4xl sm:text-7xl lg:text-9xl 
    text-center px-10 sm:px-20 
    font-Rubik font-extrabold 
    text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-500 
    motion-safe:animate-pulse`,
})``;

const Introduction = () => {
  return (
    <div className="flex justify-center items-center h-screen overflow-clip">
      <div className="flex flex-col justify-center items-center">
        <NavItems />
        <JobTitle>WEB DEVELOPER</JobTitle>
        <ColoredHeader
          coloredText="exceptional,"
          textBeforeChildren="Passion for delivering"
        >
          mobile-first web applications
        </ColoredHeader>

        <TechStacks />
      </div>
      <FloatingSidebar />
    </div>
  );
};

export default Introduction;
