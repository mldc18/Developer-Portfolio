import SectionTitle from "../../libs/components/section-title";
import MainTemplate from "../../libs/components/template/main-template";
import {
  getAlmedahImages,
  getBoffiImages,
} from "../../services/carousel-images";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import ProjectTemplate from "../../libs/components/template/project-template";
import Navbar from "../../libs/components/nav-bar";
import { Projects } from "../../libs/enums/projects";
import { Techstacks } from "../../libs/enums/techstacks";

const BOFFI_TECHSTACK = [
  Techstacks.REACT,
  Techstacks.NEXT,
  Techstacks.JAVASCRIPT,
  Techstacks.TYPESCRIPT,
  Techstacks.TAILWIND,
  Techstacks.STYLED_COMPONENTS,
  Techstacks.GIT,
];

const ALMEDAH_TECHSTACK = [
  Techstacks.LARAVEL,
  Techstacks.HTML,
  Techstacks.JAVASCRIPT,
  Techstacks.CSS,
  Techstacks.GIT,
];

type ProjectProps = {
  almedahImages: Array<string>;
  boffiImages: Array<string>;
};

const ProjectsPage = (props: ProjectProps) => {
  const { almedahImages, boffiImages } = props;
  const [currentPageContent, setCurrentPageContent] = useState(Projects.BOFFI);
  const [currentProjectNumber, setCurrentProjectNumber] = useState(1);
  const pageLimit = 2;

  useEffect(() => {
    if (currentProjectNumber == 1) {
      setCurrentPageContent(Projects.BOFFI);
    } else if (currentProjectNumber == 2) {
      setCurrentPageContent(Projects.ALMEDAH);
    }
  }, [currentProjectNumber]);

  function handleNextNavigation() {
    setCurrentProjectNumber((prevState) => prevState - 1);
  }

  function handlePreviousNavigation() {
    setCurrentProjectNumber((prevState) => prevState + 1);
  }

  const disableNextNavigation = currentProjectNumber == 1;
  const disablePreviousNavigation = currentProjectNumber == pageLimit;
  let pageContent;

  switch (currentPageContent) {
    case Projects.BOFFI:
      pageContent = (
        <ProjectTemplate
          coloredHeaderText="Boffi Studio Manila Showroom"
          coloredHeaderChildren="- In collaboration with Symph & Focus Global Inc"
          mediaCarouselImages={boffiImages}
          techstackCollection={BOFFI_TECHSTACK}
        />
      );
      break;
    case Projects.ALMEDAH:
      pageContent = (
        <ProjectTemplate
          coloredHeaderText="Almedah ERP"
          coloredHeaderChildren="- In collaboration with TIP QC TechnoCore"
          mediaCarouselImages={almedahImages}
          techstackCollection={ALMEDAH_TECHSTACK}
        />
      );
      break;
  }

  return (
    <MainTemplate>
      <div className="bg-slate-900">
        <div className="flex justify-center items-center pt-20">
          <Navbar currentTab="Projects" />
        </div>
        <div className="flex justify-center text-5xl sm:text-7xl text-[#bad985]">
          <button
            onClick={handleNextNavigation}
            disabled={disableNextNavigation}
          >
            <BsFillCaretLeftFill
              className={`hover:text-[#61dafb] cursor-pointer`}
            />
          </button>
          <SectionTitle title="PROJECTS" />
          <button
            onClick={handlePreviousNavigation}
            disabled={disablePreviousNavigation}
          >
            <BsFillCaretRightFill className="hover:text-black cursor-pointer" />
          </button>
        </div>
        {pageContent}
      </div>
    </MainTemplate>
  );
};

export async function getStaticProps() {
  const almedahImages = await getAlmedahImages();
  const boffiImages = await getBoffiImages();

  return {
    props: { almedahImages, boffiImages },
  };
}

export default ProjectsPage;
