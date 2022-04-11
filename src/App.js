import "./App.css";

//Components
import Landing from "./Components/Landing";
import Intro from "./Components/Intro";
import Menu from "./Components/Menu";
import Steaks from "./Components/Steaks";
import Bar from "./Components/Bar";

function App() {
  return (
    <div className="App">
      <Landing />
      <Intro />
      <Menu />
      <Steaks />
      <Bar />
    </div>
  );
}

export default App;
