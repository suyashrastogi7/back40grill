import "./App.css";

import { Element, Link } from "react-scroll";

//Images
import dot from "./Images/dot.svg";

//Components
import Landing from "./Components/Landing";
import Intro from "./Components/Intro";
import Menu from "./Components/Menu";
import Steaks from "./Components/Steaks";
import Bar from "./Components/Bar";
import Offers from "./Components/Offers";
import Footer from "./Components/Footer";

function App() {
  const screens = [
    "landing",
    "intro",
    "menu",
    "steaks",
    "bar",
    "offers",
    "footer",
  ];
  return (
    <div className="App">
      <div className="fixed right-12 flex flex-col z-50 top-1/2 -translate-y-1/2">
        {screens.map((item, i) => {
          return (
            <Link to={item} key={i} spy={true} smooth={true} duration={500}>
              <img
                src={dot}
                alt="dot"
                className="h-6 w-6 my-2 opacity-75 hover:opacity-100 cursor-pointer"
              />
            </Link>
          );
        })}
      </div>
      <Element name="landing">
        <Landing />
      </Element>
      <Element name="intro">
        <Intro />
      </Element>
      <Element name="menu">
        <Menu />
      </Element>
      <Element name="steaks">
        <Steaks />
      </Element>
      <Element name="bar">
        <Bar />
      </Element>
      <Element name="offers">
        <Offers />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
