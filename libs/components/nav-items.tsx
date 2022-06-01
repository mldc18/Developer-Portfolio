import Link from "next/link";
import styled from "styled-components";

const NavItemsContainer = styled.div.attrs({
  className: `
  flex space-x-7 md:space-x-14 mb-8
  text-xl md:text-4xl font-Rubik font-bold
  text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-500 
  tracking-wide`,
})``;

const NavItems = () => {
  return (
    <NavItemsContainer>
      <Link href="/projects">Projects</Link>
      <Link href="/">Self-made</Link>
      <Link href="/">Reco(s)</Link>
    </NavItemsContainer>
  );
};

export default NavItems;
