import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import Footer from "../partials/Footer";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>ROSSA AI | Dare to create</title>
        <meta
          property="og:title"
          content="ROSSA AI | Dare to create"
          key="title"
        />
        <meta
          name="description"
          content="Our Image2Code, transforms any UI design into code for the most popular frameworks."
        />
        <meta
          property="og:description"
          content="Our Image2Code, transforms any UI design into code for the most popular frameworks."
        />
        <meta property="og:image" content="https://rossa.ai/favicon.png" />
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />

        <main className="flex-grow">
          <HeroHome />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Home;
