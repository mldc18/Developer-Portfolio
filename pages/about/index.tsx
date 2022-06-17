import AboutInfo from "../../libs/components/about-info";
import Navbar from "../../libs/components/nav-bar";
import SectionTitle from "../../libs/components/section-title";
import MainTemplate from "../../libs/components/template/main-template";
import Link from "next/link";

const Contact = () => {
  return (
    <MainTemplate>
      <div className="flex justify-center text-5xl sm:text-7xl text-[#bad985] pt-10 h-full px-8 bg-slate-900">
        <div className="flex justify-center items-center flex-col">
          <Navbar currentTab="About" />
          <SectionTitle title="ABOUT" />
          <div className="text-xl sm:text-2xl indent-5 font-Karla text-slate-500 tracking-tighter text-justify sm:w-[500px] mt-5">
            Hi! I&apos;m lester. I have contributed to the development of 3
            industry projects over the past year. I challenge myself everyday
            through creating fun and interactive applications. If there is one
            thing to remember me by,
            <p className="italic font-bold text-white text-2xl sm:text-3xl text-center mt-4 animate-bounce">
              i don&apos;t deliver substandard work.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <AboutInfo
              className="md:mt-7"
              infoTitle="Education"
              infoDescription="BS Computer Science in TIP QC"
            />
            <AboutInfo
              infoTitle="Experience"
              infoDescription="1 year and 4 months of Web Development"
            />
            <Link href="/LesterResume.pdf">
              <a
                className="text-xl font-Rubik text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-teal-500 font-bold
             mt-4"
                target="_blank"
              >
                Open résumé in new tab
              </a>
            </Link>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Contact;
