import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Kittens from "./pages/Kittens";
import Studs from "./pages/Studs";
import BeforeYouBuy from "./pages/BeforeYouBuy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Queens from "./pages/Queens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aktualnosci" element={<News />}></Route>
        <Route path="/kocieta" element={<Kittens />}></Route>
        <Route path="/kocury" element={<Studs />}></Route>
        <Route path="/kotki" element={<Queens />}></Route>
        <Route path="/kocieta" element={<Kittens />}></Route>
        <Route path="/zanim-kupisz" element={<BeforeYouBuy />}></Route>
        <Route path="/o-nas" element={<About />}></Route>
        <Route path="/kontakt" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
