import ColoredHeader from "./colored-header";
import FloatingSidebar from "./floating-sidebar";
import TechStacks from "./tech-stacks";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const NavItemsContainer = styled.div.attrs({
  className: `
  flex space-x-7 md:space-x-14 mb-8
  text-xl md:text-4xl font-Rubik font-bold
  text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-500 
  tracking-wide`,
})``;

const JobTitle = styled.p.attrs({
  className: `
    text-4xl sm:text-7xl lg:text-9xl 
    text-center px-10 sm:px-20 
    font-Rubik font-extrabold 
    text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-500 
    motion-safe:animate-pulse`,
})``;

const Introduction = () => {
  const [mainText, setMainText] = useState("WEB DEVELOPER");
  let subtitle;

  function handleChangeMainText(text: string) {
    setMainText(text);
  }

  switch (mainText) {
    case "WEB DEVELOPER":
      subtitle = (
        <ColoredHeader
          coloredText="exceptional,"
          textBeforeChildren="Passion for delivering"
        >
          mobile-first web applications
        </ColoredHeader>
      );
      break;
    case "PROJECTS":
      subtitle = (
        <ColoredHeader
          coloredText="timely & high standard"
          textBeforeChildren="Providing clients with"
        >
          product features
        </ColoredHeader>
      );
      break;
    case "SELF-MADE":
      subtitle = (
        <ColoredHeader
          coloredText="fun & challenging"
          textBeforeChildren="Sharpening skills through"
        >
          app ideas
        </ColoredHeader>
      );
      break;
    case "WEB DEVELOPER":
      subtitle = (
        <ColoredHeader
          coloredText="exceptional,"
          textBeforeChildren="Passion for delivering"
        >
          mobile-first web applications
        </ColoredHeader>
      );
      break;
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center">
        <NavItemsContainer>
          <Link href="/projects">
            <a onMouseEnter={() => handleChangeMainText("PROJECTS")}>
              Projects
            </a>
          </Link>
          <Link href="/self-made">
            <a onMouseEnter={() => handleChangeMainText("SELF-MADE")}>
              Self-made
            </a>
          </Link>
          <Link href="/about">
            <a onMouseEnter={() => handleChangeMainText("WEB DEVELOPER")}>
              About
            </a>
          </Link>
        </NavItemsContainer>
        <JobTitle>{mainText}</JobTitle>
        {subtitle}
        <div className="font-Karla text-xs md:text-lg text-slate-500 tracking-tighter mt-5">
          created using the following
        </div>
        <TechStacks />
      </div>
    </div>
  );
};

export default Introduction;
