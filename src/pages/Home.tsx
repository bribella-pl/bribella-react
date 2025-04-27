import Layout from "../components/Layout/Layout";
import RandomQuote from "../components/RandomQuote";
import Section from "../components/Section";
import ParallaxImage from "../components/ParallaxImage";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import { decode } from "he";

type HomeData = {
  section1Title: string;
  section1Text: string;
  section2Title: string;
  section2Text: string;
};

function Home() {
  const [data, setData] = useState<HomeData | null>(null);

  useEffect(() => {
    fetch("/content/home/home.md")
      .then((response) => response.text())
      .then((text) => {
        const rawData = matter(text).data as HomeData;
        const data = Object.fromEntries(
          Object.entries(rawData).map(([key, value]) => [
            key,
            decode(String(value)),
          ])
        ) as HomeData;
        setData(data);
      });
  }, []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl="/images/glowa.webp"
        alt="Majestatyczny kot brytyjski"
        title="Witamy w&nbsp;Bribella*PL"
      >
        <RandomQuote />
      </ParallaxImage>

      <Section
        title={data?.section1Title}
        text={data?.section1Text}
        imageUrl="/logo.svg"
        imageAlt="Bribella logo"
      />

      <ParallaxImage
        imageUrl="/images/drapak.webp"
        alt="Kot brytyjski na drapaku"
        height="95"
      ></ParallaxImage>

      {/* Partnerstwo z WCF */}
      <Section
        title={data?.section2Title}
        text={data?.section2Text}
        imageUrl="/wcf.svg"
        imageAlt="WCF logo"
        imageFirst
      />

      <ParallaxImage
        imageUrl="/images/medale.webp"
        alt="Puchary i medale"
        height="100"
      ></ParallaxImage>

      <section
        className="
        mx-auto mt-16 px-4 mb-20
        text-bribella-blue 
        flex flex-col lg:flex-row items-center lg:justify-center"
      >
        <h2 className="text-3xl font-semibold m-4 p-4">Co u nas słychać?</h2>
        <NavLink
          to="/aktualnosci"
          className="
            text-2xl font-semibold 
            border-3 border-bribella-blue 
            rounded-xl
            w-50
            px-6 py-4 
            hover:border-bribella-orange hover:text-bribella-orange 
            transition-colors duration-300"
        >
          {" "}
          Sprawdź
        </NavLink>
      </section>
    </Layout>
  );
}

export default Home;
