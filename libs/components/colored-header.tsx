import { ReactNode } from "react";
import NewtabLink from "./newtab-link";

type ColoredHeaderProps = {
  children: ReactNode;
  coloredText: string;
  textBeforeChildren?: string;
};

const ColoredHeader = (props: ColoredHeaderProps) => {
  const { children, coloredText, textBeforeChildren } = props;

  return (
    <p className="md:text-2xl lg:text-3xl font-Karla mt-2 text-white text-center px-10 md:px-20">
      {textBeforeChildren}
      <span className="font-bold font-Rubik text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-500">
        {" "}
        <NewtabLink
          href="https://www.boffistudiomanila.com/"
          text={coloredText}
        />
      </span>{" "}
      {children}
    </p>
  );
};

export default ColoredHeader;
