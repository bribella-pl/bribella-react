import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Header from "../components/Header";
import { formatDate } from "../utils/dateParser";
import Gallery from "../components/Gallery";
import { marked } from "marked";
import { loadAllKittens } from "../utils/loaders/catsLoaders/loadAllKittens";
import { loadKittensPage } from "../utils/loaders/catsLoaders/loadKittens";
import { Cat } from "../types/types";
import Collapsible from "../components/Collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import CheckOutOurCats from "../components/CheckOutOurCats";

function Kittens() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = useMemo(() => loadKittensPage(), []);
  const kittens = useMemo(() => loadAllKittens(), []);
  const groupedByLitter = useMemo(() => {
    const groups: Record<string, Cat[]> = {};
    kittens.forEach((kitten) => {
      const litter = kitten.litter || "Inny miot";
      if (!groups[litter]) groups[litter] = [];
      groups[litter].push(kitten);
    });
    return groups;
  }, [kittens]);

  const [openLitters, setOpenLitters] = useState<Record<string, boolean>>({});

  const toggleLitter = (litter: string) => {
    setOpenLitters((prev: Record<string, boolean>) => ({
      ...prev,
      [litter]: !prev[litter],
    }));
  };
  return (
    <Layout>
      <ParallaxImage
        imageUrl={data?.mainImageUrl}
        alt="Majestatyczny kot brytyjski"
        title={data?.title}
      ></ParallaxImage>

      <div className="w-[90%] lg:w-[75%] mx-auto">
        {Object.entries(groupedByLitter).map(([litter, cats]) => (
          <div key={litter} className="m-8">
            <button
              onClick={() => toggleLitter(litter)}
              className="w-full flex justify-between items-center text-5xl lg:text-7xl p-6 bg-bribella-blue/10 hover:bg-bribella-blue/20 text-bribella-blue rounded-xl transition-colors font-[Corinthia]"
            >
              <span>Miot {litter}</span>
              <span>
                {openLitters[litter] ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </span>
            </button>
            <Collapsible isOpen={openLitters[litter]}>
              <div className="mt-4 space-y-8">
                {cats.map((cat) => (
                  <div
                    key={`${cat.name}-${cat.date}`}
                    className="rounded-xl overflow-hidden shadow-xl bg-bribella-grey/15"
                  >
                    <Header
                      title={cat.name}
                      className="text-bribella-blue text-left pl-4 lg:p-10 pb-1"
                    />
                    <div className="text-bribella-blue/60 p-4 lg:pl-10 lg:py-0 mb-0 text-left">
                      Urodzony {formatDate(cat.date)} roku.
                    </div>
                    <div
                      className="text-md lg:text-lg leading-relaxed text-left p-4 lg:p-10"
                      dangerouslySetInnerHTML={{
                        __html: cat?.content ? marked(cat.content) : "",
                      }}
                    ></div>
                    <Gallery images={cat.images} />
                  </div>
                ))}
              </div>
            </Collapsible>
          </div>
        ))}
      </div>
      <CheckOutOurCats type="kotki" />
      <CheckOutOurCats type="kocury" />
    </Layout>
  );
}

export default Kittens;
