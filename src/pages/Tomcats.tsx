import { useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import { loadTomcatsPage } from "../utils/loaders/catsLoaders.ts/loadCatsPage";

function Tomcats() {
  const data = useMemo(() => loadTomcatsPage(), []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl={data?.mainImageUrl}
        alt="Majestatyczny kot brytyjski"
        title={data?.title}
      ></ParallaxImage>
      <Section text={data?.content} className="shadow-xl"></Section>
    </Layout>
  );
}

export default Tomcats;
