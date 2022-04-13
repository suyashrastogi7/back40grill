import "./App.css";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
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
  const containerRef = useRef(null);
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
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll data-scroll-speed-section ref={containerRef}>
          <Element data-scroll data-scroll-speed name="landing">
            <Landing data-scroll data-scroll-speed />
          </Element>
          <Element data-scroll data-scroll-speed name="intro">
            <Intro data-scroll data-scroll-speed />
          </Element>
          <Element data-scroll data-scroll-speed name="menu">
            <Menu data-scroll data-scroll-speed />
          </Element>
          <Element data-scroll data-scroll-speed name="steaks">
            <Steaks data-scroll data-scroll-speed />
          </Element>
          <Element data-scroll data-scroll-speed name="bar">
            <Bar data-scroll data-scroll-speed />
          </Element>
          <Element data-scroll data-scroll-speed name="offers">
            <Offers data-scroll data-scroll-speed />
          </Element>
          <Element data-scroll data-scroll-speed name="footer">
            <Footer data-scroll data-scroll-speed />
          </Element>
        </main>
      </LocomotiveScrollProvider>
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
    </div>
  );
}

export default App;
