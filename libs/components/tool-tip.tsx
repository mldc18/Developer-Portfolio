import { Techstacks } from "../enums/techstacks";
import {
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiFramer,
  SiCss3,
  SiAirtable,
  SiUnsplash,
  SiHtml5,
  SiJavascript,
  SiLaravel,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ImGit } from "react-icons/im";

type ToolTipProps = {
  text: string;
};

const Tooltip = (props: ToolTipProps) => {
  const { text } = props;

  function getIcon() {
    switch (text) {
      case Techstacks.REACT:
        return <FaReact className="hover:text-[#61dafb] cursor-pointer" />;
      case Techstacks.JAVASCRIPT:
        return <SiJavascript className="hover:text-[#F0DB4F] cursor-pointer" />;
      case Techstacks.CSS:
        return <SiCss3 className="hover:text-[#264de4] cursor-pointer" />;
      case Techstacks.HTML:
        return <SiHtml5 className="hover:text-[#f14e32] cursor-pointer" />;
      case Techstacks.LARAVEL:
        return <SiLaravel className="hover:text-white cursor-pointer" />;
      case Techstacks.GIT:
        return <ImGit className="hover:text-[#f14e32] cursor-pointer" />;
      case Techstacks.NEXT:
        return <SiNextdotjs className="hover:text-black cursor-pointer" />;
      case Techstacks.TYPESCRIPT:
        return <SiTypescript className="hover:text-[#007acc] cursor-pointer" />;
      case Techstacks.TAILWIND:
        return <SiTailwindcss className="hover:text-sky-400 cursor-pointer " />;
      case Techstacks.STYLED_COMPONENTS:
        return (
          <SiStyledcomponents className="hover:text-white cursor-pointer" />
        );

      case Techstacks.FRAMER:
        return (
          <SiStyledcomponents className="hover:text-black cursor-pointer" />
        );
      case Techstacks.AIRTABLE:
        return <SiAirtable className="hover:text-white cursor-pointer" />;
      case Techstacks.UNSPLASH:
        return <SiUnsplash className="hover:text-black cursor-pointer" />;
    }
  }

  return (
    <div className="relative">
      <div className="peer">{getIcon()}</div>
      <div className="absolute bottom-0 left-0 right-0 invisible peer-hover:visible text-xs text-center translate-y-7 text-slate-500 font-bold">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
