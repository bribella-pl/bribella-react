import { useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import { loadBeforeYouBuyPage } from "../utils/loaders/loadBeforeYouBuyPage";
import CheckOutOurCats from "../components/CheckOutOurCats";

function BeforeYouBuy() {
  const data = useMemo(() => loadBeforeYouBuyPage(), []);

  return (
    <Layout>
      <div className="flex flex-col justify-center">
        <ParallaxImage
          imageUrl={data?.mainImageUrl}
          alt="Majestatyczny kot brytyjski"
          title={data?.title}
        ></ParallaxImage>
        <Section text={data?.content} className="shadow-xl"></Section>
        <CheckOutOurCats type="kocieta" />
      </div>
    </Layout>
  );
}

export default BeforeYouBuy;
