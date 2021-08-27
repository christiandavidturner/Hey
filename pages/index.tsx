import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Emails from "./components/Emails/Emails";
import Header from "./components/Header/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-dark h-screen">
      <Head>
        <title>Imbox</title>
        <meta
          name="Hey"
          content="Hey clone built by github.com/christiandavidturner"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-dark">
        <Header />
        <Emails />
      </main>
    </div>
  );
};

export default Home;
