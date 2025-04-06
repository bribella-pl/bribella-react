import Layout from "../components/Layout/Layout";
import RandomQuote from "../components/RandomQuote";
import Section from "../components/Section";
import ParallaxImage from "../components/ParallaxImage";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <ParallaxImage
        imageUrl="/images/majestic.webp"
        alt="Majestatyczny kot brytyjski"
        title="Witamy w&nbsp;Bribella*PL"
      >
        <RandomQuote />
      </ParallaxImage>

      <Section
        title="Nasza pasja do&nbsp;kotów brytyjskich"
        text="Bribella*PL to domowa hodowla kotów brytyjskich krótkowłosych.
            Kochamy ich&nbsp;spokojny temperament, pluszowe futerko i&nbsp;wyjątkowy
            charakter. Nasze koty wychowują się w rodzinnej atmosferze, otoczone
            troską i&nbsp;miłością."
        imageUrl="/logo.svg"
        imageAlt="Bribella logo"
      />

      <ParallaxImage
        imageUrl="/images/flowers.webp"
        alt="Kot brytyjski pod wiśnią"
        height="95"
      ></ParallaxImage>

      {/* Partnerstwo z WCF */}
      <Section
        title="Partnerstwo z WCF"
        text="Należymy do największej światowej federacji felinologicznej –&nbsp;World
            Cat Federation (WCF). Wszystkie nasze kocie dzieci otrzymują
            rodowody&nbsp;WCF, które potwierdzają ich rasowość i&nbsp;są respektowane na
            całym świecie."
        imageUrl="/wcf.svg"
        imageAlt="WCF logo"
        imageFirst
      />

      <ParallaxImage
        imageUrl="/images/box.webp"
        alt="Kot brytyjski w pudełku"
        height="100"
      ></ParallaxImage>

      <section
        className="
        mx-auto mt-16 px-4 mb-20
        text-bribella-blue 
        flex flex-col lg:flex-row items-center lg:justify-center"
      >
        <h2 className="text-4xl font-semibold m-4 p-4">Co u nas słychać?</h2>
        <NavLink
          to="/aktualnosci"
          className="
            text-3xl font-semibold 
            border-4 border-bribella-blue 
            rounded-xl
            w-50
            px-6 py-4 
            hover:border-bribella-orange hover:text-bribella-orange 
            transition-colors duration-300"
        >
          {" "}
          Sprawdź
        </NavLink>
      </section>
    </Layout>
  );
}

export default Home;
