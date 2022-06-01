type ResponsibilitiesSectionProps = {
  collection: Array<String>;
};

const ResponsibilitiesSection = (props: ResponsibilitiesSectionProps) => {
  const { collection } = props;
  const responsibilities = collection.reduce(
    (paragraph, text) => paragraph + " " + text
  );

  return (
    <div className="text-center">
      <p className="text-3xl font-Rubik mt-2 text-white font-bold">
        Responsibilities
      </p>
      <p className="text-2xl font-Karla text-[#bad985] mt-6">
        {responsibilities}
      </p>
    </div>
  );
};

export default ResponsibilitiesSection;
