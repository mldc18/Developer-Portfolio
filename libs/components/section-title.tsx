import styled from "styled-components";

type SectionTitleProps = {
  title: string;
};

const Title = styled.p.attrs({
  className: `
  text-5xl sm:text-7xl font-Rubik font-extrabold 
  text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-500 
  motion-safe:animate-pulse`,
})``;

const SectionTitle = (props: SectionTitleProps) => {
  const { title } = props;
  return <Title>{title}</Title>;
};

export default SectionTitle;
