import Layout from "../components/Layout/Layout";
import RandomQuote from "../components/RandomQuote";

function Home() {
  return (
    <Layout>
      <section
        className="relative h-[85vh] bg-cover bg-center flex flex-col justify-between"
        style={{
          backgroundImage: "url('/images/majestic.webp')",
        }}
      >
        <RandomQuote />

        <div className="bg-bribella-blue w-full text-bribella-orange text-center">
          <h1 className="text-lg lg:text-2xl m-4  tracking-wide">
            Witamy w Bribella*PL
          </h1>
        </div>
      </section>

      {/* Opis hodowli */}
      <section className=" max-w-5xl mx-auto my-16 px-4 text-bribella-black flex">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Nasza pasja do kotów brytyjskich
          </h2>
          <p className="text-lg leading-relaxed text-left">
            Bribella*PL to domowa hodowla kotów brytyjskich krótkowłosych.
            Kochamy ich spokojny temperament, pluszowe futerko i wyjątkowy
            charakter. Nasze koty wychowują się w rodzinnej atmosferze, otoczone
            troską i miłością.
          </p>
        </div>
        <img
          src="/logo.svg"
          alt="Bribella logo"
          className="max-w-15 xl:max-w-25 ml-10"
        />
      </section>

      <section
        className="relative h-[55vh] bg-cover bg-center flex flex-col justify-between"
        style={{
          backgroundImage: "url('/images/majestic.webp')",
        }}
      />

      {/* Partnerstwo z WCF */}
      <section className="max-w-5xl mx-auto mt-16 px-4 mb-20 text-bribella-black flex">
        <img
          src="/wcf_logo.svg"
          alt="WCF logo"
          className="max-w-15 xl:max-w-25 mr-10"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Partnerstwo z WCF</h2>
          <p className="text-lg leading-relaxed text-left">
            Należymy do największej światowej federacji felinologicznej – World
            Cat Federation (WCF). Wszystkie nasze kocie dzieci otrzymują
            rodowody WCF, które potwierdzają ich rasowość i są respektowane na
            całym świecie.
          </p>
        </div>
      </section>

      <section
        className="relative h-[55vh] bg-cover bg-center flex flex-col justify-between"
        style={{
          backgroundImage: "url('/images/majestic.webp')",
        }}
      />

      <section className="max-w-5xl mx-auto mt-16 px-4 mb-20 text-bribella-black flex">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Co u nas słychać?</h2>
          <p className="text-lg leading-relaxed "></p>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
