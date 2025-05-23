import { useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import WhatsUp from "../components/WhatsUp";
import { loadAboutPage } from "../utils/loaders/loadAboutPage";

function About() {
  const data = useMemo(() => loadAboutPage(), []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl={data?.mainImageUrl}
        alt="Majestatyczny kot brytyjski"
        title={data?.title}
      ></ParallaxImage>
      <Section text={data?.content} className="shadow-xl"></Section>

      <WhatsUp />
    </Layout>
  );
}

export default About;
