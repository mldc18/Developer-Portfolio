import ColoredHeader from "../colored-header";
import MediaCarousel from "../media-carousel";
import TechstackSection from "../techstack-section";

type ProjectTemplateProps = {
  coloredHeaderChildren: string;
  coloredHeaderText: string;
  mediaCarouselImages: Array<string>;
  techstackCollection: Array<string>;
};

const ProjectTemplate = (props: ProjectTemplateProps) => {
  const {
    coloredHeaderChildren,
    coloredHeaderText,
    mediaCarouselImages,
    techstackCollection,
  } = props;

  return (
    <div className="flex flex-col justify-center items-center py-14 sm:px-28">
      <div className="w-full flex flex-col">
        <ColoredHeader coloredText={coloredHeaderText}>
          {coloredHeaderChildren}
        </ColoredHeader>
        <div className="sm:mt-10">
          <MediaCarousel images={mediaCarouselImages} />
        </div>

        <TechstackSection collection={techstackCollection} />
      </div>
    </div>
  );
};

export default ProjectTemplate;
