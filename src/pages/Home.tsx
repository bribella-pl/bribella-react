import Layout from "../components/Layout/Layout";
import RandomQuote from "../components/RandomQuote";
import Section from "../components/Section";
import ParallaxImage from "../components/ParallaxImage";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import { decode } from "he";
import WhatsUp from "../components/WhatsUp";

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

      <WhatsUp />
    </Layout>
  );
}

export default Home;
