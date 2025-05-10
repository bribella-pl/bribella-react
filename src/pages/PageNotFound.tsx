import { useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import WhatsUp from "../components/WhatsUp";
import { loadNotFoundPage } from "../utils/loaders/loadNotFoundPage";

function PageNotFound() {
  const data = useMemo(() => loadNotFoundPage(), []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl={data?.mainImageUrl}
        alt="Majestatyczny kot brytyjski"
        title={data?.title}
      ></ParallaxImage>
      <Section title="404" text={data?.content} className="shadow-xl"></Section>
      <WhatsUp />
    </Layout>
  );
}

export default PageNotFound;
