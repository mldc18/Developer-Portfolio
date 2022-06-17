import styled from "styled-components";
import Link from "next/link";

type NavbarProps = {
  currentTab: string;
};

const NavItemsContainer = styled.div.attrs({
  className: `
    flex space-x-7 md:space-x-14 mb-8
    text-xl md:text-4xl font-Rubik font-bold
    text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-500 
    tracking-wide`,
})``;

const Navbar = (props: NavbarProps) => {
  const { currentTab } = props;
  const projectsLink = <Link href="/projects">Projects</Link>;
  const selfMadeLink = <Link href="/self-made">Self-Made</Link>;
  const aboutLink = <Link href="/about">About</Link>;

  return (
    <NavItemsContainer>
      <Link href="/">Home</Link>
      {currentTab !== "Projects" && projectsLink}
      {currentTab !== "Self-Made" && selfMadeLink}
      {currentTab !== "About" && aboutLink}
    </NavItemsContainer>
  );
};

export default Navbar;
