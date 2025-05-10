import { BrowserRouter, Route, Routes } from "react-router-dom";
//import matter from "gray-matter";
import Home from "./pages/Home";
import News from "./pages/News";
import Kittens from "./pages/Kittens";
import Tomcats from "./pages/Tomcats";
import BeforeYouBuy from "./pages/BeforeYouBuy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // fetch("/content/koty/mruczek.md")
  //   .then((response) => {
  //     console.log(response);
  //     return response.text();
  //   })
  //   .then((text) => {
  //     const content = matter(text);
  //     console.log(content);
  //     console.log(content.data);
  //   });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aktualnosci" element={<News />}></Route>
        <Route path="/kocieta" element={<Kittens />}></Route>
        <Route path="/kocury" element={<Tomcats />}></Route>
        <Route path="/zanim-kupisz" element={<BeforeYouBuy />}></Route>
        <Route path="/o-nas" element={<About />}></Route>
        <Route path="/kontakt" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
