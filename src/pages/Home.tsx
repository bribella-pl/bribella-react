import Layout from "../components/Layout/Layout";
import RandomQuote from "../components/RandomQuote";
import Section from "../components/Section";
import ParallaxImage from "../components/ParallaxImage";
import { useMemo } from "react";
import WhatsUp from "../components/WhatsUp";
import { loadHomePage } from "../utils/loaders/loadHomePage";

function Home() {
  const homeData = useMemo(() => loadHomePage(), []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl={homeData.mainImage}
        alt="Majestatyczny kot brytyjski"
        title="Witamy w&nbsp;Bribella*PL"
      >
        <RandomQuote />
      </ParallaxImage>

      <Section
        title={homeData?.section1Title}
        text={homeData?.section1Text}
        imageUrl="/logo.svg"
        imageAlt="Bribella logo"
        className="shadow-xl"
      />

      <ParallaxImage
        imageUrl={homeData.secondImage}
        alt="Kot brytyjski na drapaku"
      ></ParallaxImage>

      {/* Partnerstwo z WCF */}
      <Section
        title={homeData?.section2Title}
        text={homeData?.section2Text}
        imageUrl="/wcf.svg"
        imageAlt="WCF logo"
        imageFirst
        className="shadow-xl"
      />

      <ParallaxImage
        imageUrl={homeData.thirdImage}
        alt="Puchary i medale"
      ></ParallaxImage>

      <WhatsUp />
    </Layout>
  );
}

export default Home;
