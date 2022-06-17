type AboutInfoProps = {
  className?: string;
  infoTitle: string;
  infoDescription: string;
};

const AboutInfo = (props: AboutInfoProps) => {
  const { className, infoDescription, infoTitle } = props;

  return (
    <div
      className={`text-lg sm:text-xl font-Rubik text-white mt-4 ${className}`}
    >
      {infoTitle}:{" "}
      <span className="font-Karla text-slate-500 lg:mt-5">
        {infoDescription}
      </span>
    </div>
  );
};

export default AboutInfo;
