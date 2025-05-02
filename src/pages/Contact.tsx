import { useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import { loadContactPage } from "../utils/loaders/loadContactPage";

function Contact() {
  const data = useMemo(() => loadContactPage(), []);
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

export default Contact;
