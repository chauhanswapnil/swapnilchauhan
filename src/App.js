import "./App.css";
import Navigation from "./components/Navigation";
import HiSection from "./components/HiSection";
import About from "./components/About";
import Interest from "./components/Interest";
import Skills from "./components/Skills";
import Articles from "./components/Articles";
const App = () => {
  return (
    <div>
      <Navigation />
      <HiSection />
      <About />
      <Interest />
      <Skills />
      <Articles />
    </div>
  );
};

export default App;
