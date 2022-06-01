import ColoredHeader from "../../libs/components/colored-header";
import MediaCarousel from "../../libs/components/media-carousel";
import SectionTitle from "../../libs/components/section-title";
import TechstackSection from "../../libs/components/techstack-section";
import MainTemplate from "../../libs/components/template/main-template";
import {
  getAlmedahImages,
  getBoffiImages,
} from "../../services/carousel-images";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { copyFile } from "fs";

const BOFFI_TECHSTACK = [
  "react",
  "next",
  "javascript",
  "typescript",
  "tailwind",
  "styledcomponents",
  "git",
];

const ALMEDAH_TECHSTACK = ["laravel", "html", "javascript", "css", "git"];

type ProjectProps = {
  almedahImages: Array<string>;
  boffiImages: Array<string>;
};

const Projects = (props: ProjectProps) => {
  const { almedahImages, boffiImages } = props;
  const [currentPageContent, setCurrentPageContent] = useState("BOFFI");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const pageLimit = 2;

  useEffect(() => {
    console.log("hatdog");
    if (currentPageNumber == 1) {
      setCurrentPageContent("BOFFI");
    } else if (currentPageNumber == 2) {
      setCurrentPageContent("ALMEDAH");
    }
  }, [currentPageNumber]);

  function handleLeftNavigation() {
    setCurrentPageNumber((prevState) => prevState - 1);
  }

  function handleRightNavigation() {
    setCurrentPageNumber((prevState) => prevState + 1);
  }

  const disableLeftNavigation = currentPageNumber == 0;
  const disableRightNavigation = currentPageNumber < pageLimit;
  let pageContent;

  switch (currentPageContent) {
    case "BOFFI":
      pageContent = (
        <div className="flex flex-col justify-center items-center py-14 sm:px-28">
          <div className="w-full flex flex-col">
            <ColoredHeader coloredText="Boffi Studio Manila Showroom">
              - In collaboration with Symph & Focus Global Inc
            </ColoredHeader>
            <div className="sm:mt-10">
              <MediaCarousel images={boffiImages} />
            </div>

            <TechstackSection collection={BOFFI_TECHSTACK} />
          </div>
        </div>
      );
      break;
    case "ALMEDAH":
      pageContent = (
        <div className="flex flex-col justify-center items-center py-14 sm:px-28">
          <div className="w-full flex flex-col">
            <ColoredHeader coloredText="Almedah ERP">
              - In collaboration with TIP QC TechnoCore
            </ColoredHeader>
            <div className="sm:mt-10">
              <MediaCarousel images={almedahImages} />
            </div>

            <TechstackSection collection={ALMEDAH_TECHSTACK} />
          </div>
        </div>
      );
      break;
  }

  return (
    <MainTemplate>
      <div className="bg-slate-900">
        <div className="flex text-5xl sm:text-7xl text-[#bad985]">
          <button
            onClick={handleLeftNavigation}
            disabled={disableLeftNavigation}
          >
            <BsFillCaretLeftFill
              className={`hover:text-[#61dafb] cursor-pointer`}
            />
          </button>
          <SectionTitle title="PROJECTS" />
          <button
            onClick={handleRightNavigation}
            disabled={disableRightNavigation}
          >
            <BsFillCaretRightFill
              className="hover:text-black cursor-pointer"
              onClick={handleRightNavigation}
            />
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

export default Projects;
