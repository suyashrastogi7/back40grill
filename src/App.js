import "./App.css";

//Components
import Landing from "./Components/Landing";
import Intro from "./Components/Intro";
import Menu from "./Components/Menu";
import Steaks from "./Components/Steaks";
import Bar from "./Components/Bar";
import Offers from "./Components/Offers";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <Intro />
      <Menu />
      <Steaks />
      <Bar />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
