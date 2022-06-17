import { motion } from "framer-motion";
import Introduction from "../libs/components/introduction";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import MainTemplate from "../libs/components/template/main-template";

const ALMEDAH_TECHSTACK = ["laravel", "html", "javascript", "css", "git"];

const VARIANTS = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Home = () => {
  return (
    <MainTemplate>
      <Introduction />
    </MainTemplate>
  );
};

export default Home;
