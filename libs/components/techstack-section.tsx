import { Techstacks } from "../enums/techstacks";
import styled from "styled-components";
import NewtabLink from "./newtab-link";
import Tooltip from "./tool-tip";

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

  const techstacks = collection.map((techstack, index) => {
    let icon;
    switch (techstack) {
      case Techstacks.REACT:
        icon = <Tooltip key={index} text="React" />;
        break;
      case Techstacks.NEXT:
        icon = <Tooltip key={index} text="Next" />;
        break;
      case Techstacks.JAVASCRIPT:
        icon = <Tooltip key={index} text="JavaScript" />;
        break;
      case Techstacks.TYPESCRIPT:
        icon = <Tooltip key={index} text="TypeScript" />;
        break;
      case Techstacks.TAILWIND:
        icon = <Tooltip key={index} text="Tailwind" />;
        break;
      case Techstacks.STYLED_COMPONENTS:
        icon = <Tooltip key={index} text="Styled Components" />;
        break;
      case Techstacks.GIT:
        icon = <Tooltip key={index} text="Git" />;
        break;
      case Techstacks.LARAVEL:
        icon = <Tooltip key={index} text="Laravel" />;
        break;
      case Techstacks.CSS:
        icon = <Tooltip key={index} text="CSS" />;
        break;
      case Techstacks.HTML:
        icon = <Tooltip key={index} text="HTML" />;
        break;
    }
    return icon;
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
