import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import matter from "gray-matter";
import { SimpleData } from "../types/types";
import WhatsUp from "../components/WhatsUp";

function About() {
  const [data, setData] = useState<SimpleData | null>(null);

  useEffect(() => {
    fetch("/content/about/about.md")
      .then((res) => res.text())
      .then((text) => {
        const parsed = matter(text);
        setData(parsed.data as SimpleData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl="/images/glowa.webp"
        alt="Majestatyczny kot brytyjski"
        title={data?.title}
      ></ParallaxImage>
      <Section text={data?.body}></Section>

      <WhatsUp />
    </Layout>
  );
}

export default About;
