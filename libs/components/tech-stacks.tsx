import styled from "styled-components";
import Tooltip from "./tool-tip";

const TechstackContainer = styled.div.attrs({
  className: `
  flex items-center justify-center 
  space-x-3 md:space-x-5 
  text-3xl md:text-5xl text-[#bad985] 
  w-3/4 sm:w-full mt-5`,
})``;

const TechStacks = () => {
  return (
    <TechstackContainer>
      <Tooltip text="React" />
      <Tooltip text="NextJS" />
      <Tooltip text="JavaScript" />
      <Tooltip text="TypeScript" />
      <Tooltip text="Tailwind" />
      <Tooltip text="Styled Components" />
      <Tooltip text="Git" />
    </TechstackContainer>
  );
};

export default TechStacks;
