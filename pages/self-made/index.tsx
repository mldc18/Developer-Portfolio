import SectionTitle from "../../libs/components/section-title";
import MainTemplate from "../../libs/components/template/main-template";
import ProjectCard from "../../libs/components/project-card";
import Tooltip from "../../libs/components/tool-tip";
import Navbar from "../../libs/components/nav-bar";

type SelfMadeProps = {};

const SelfMade = (props: SelfMadeProps) => {
  return (
    <MainTemplate>
      <div className="flex flex-col justify-center items-center py-16 bg-slate-900">
        <Navbar currentTab="Self-Made" />
        <SectionTitle title="SELF-MADE" />
        <div className="flex flex-col items-center mt-10">
          <ProjectCard
            imageSrc="/self-made/shout-out.png"
            projectDescription="Create Shout-outs for Everyone!"
            projectName="Shout-outs"
            projectUrl="https://shout-out-board.vercel.app/"
          >
            <Tooltip text="NextJS" />
            <Tooltip text="TypeScript" />
            <Tooltip text="Tailwind" />
            <Tooltip text="AirTable" />
          </ProjectCard>
          <ProjectCard
            imageSrc="/self-made/raining-cats-and-dogs.png"
            projectDescription="Cat and Dog Image Gallery"
            projectName="Raining Cats & Dogs"
            projectUrl="https://raining-cats-and-dogs.vercel.app/"
          >
            <Tooltip text="NextJS" />
            <Tooltip text="TypeScript" />
            <Tooltip text="Tailwind" />
            <Tooltip text="Styled Components" />
            <Tooltip text="Unsplash" />
          </ProjectCard>
        </div>
      </div>
    </MainTemplate>
  );
};

export default SelfMade;
