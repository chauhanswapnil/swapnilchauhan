import "./App.css";
import { Button, Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import HiSection from "./components/HiSection";
import About from "./components/About";
import Interest from "./components/Interest";
import Technologies from "./components/Technologies";
import Particles from "react-particles-js";
const App = () => {
  return (
    <div>
      <Navigation />
      <HiSection />
      <About />
      <Interest />
      <Technologies />
    </div>
  );
};

export default App;
