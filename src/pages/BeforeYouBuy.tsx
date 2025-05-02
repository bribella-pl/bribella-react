import { useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import { loadBeforeYouBuyPage } from "../utils/loaders/loadBeforeYouBuyPage";

function BeforeYouBuy() {
  const data = useMemo(() => loadBeforeYouBuyPage(), []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl="/images/glowa.webp"
        alt="Majestatyczny kot brytyjski"
        title={data?.title}
      ></ParallaxImage>
      <Section text={data?.body}></Section>
    </Layout>
  );
}

export default BeforeYouBuy;
