import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import matter from "gray-matter";
import { SimpleData } from "../types/types";

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
        imageUrl="/images/bok.webp"
        alt="Majestatyczny kot brytyjski"
        title="O nas"
      ></ParallaxImage>
      <Section text={data?.body}></Section>
    </Layout>
  );
}

export default About;
