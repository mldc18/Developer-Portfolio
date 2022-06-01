import Head from "next/head";
import { ReactNode } from "react";

type MainTemplateProps = {
  children: ReactNode;
};

const MainTemplate = (props: MainTemplateProps) => {
  const { children } = props;

  return (
    <div>
      <Head>
        <title>Lester - Dev Portfolio</title>
        <meta name="description" content="Developer Portfolio - Lester" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla&family=Rubik:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="relative bg-slate-900">{children}</main>
    </div>
  );
};

export default MainTemplate;
