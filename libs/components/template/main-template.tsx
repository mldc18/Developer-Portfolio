import Head from "next/head";
import { ReactNode } from "react";
import FloatingSidebar from "../floating-sidebar";

type MainTemplateProps = {
  children: ReactNode;
};

const MainTemplate = (props: MainTemplateProps) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Lester Dela Cruz</title>
        <meta name="description" content="Developer Portfolio - Lester" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
      </Head>
      <main className="bg-slate-900 h-screen">
        {children}
        <FloatingSidebar />
      </main>
    </>
  );
};

export default MainTemplate;
