import "./App.css";
import Navigation from "./components/Navigation";
import HiSection from "./components/HiSection";
import About from "./components/About";
import Interest from "./components/Interest";
import Skills from "./components/Skills";
const App = () => {
  return (
    <div>
      <Navigation />
      <HiSection />
      <About />
      <Interest />
      <Skills />
    </div>
  );
};

export default App;
