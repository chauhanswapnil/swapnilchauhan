import "./App.css";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import HiSection from "./components/HiSection";
import About from "./components/About";
import Interest from "./components/Interest";
import Skills from "./components/Skills";
import Articles from "./components/Articles";
import { useLocation } from "react-router";
const App = (props) => {
  const location = useLocation();
  useEffect(() => {
    return () => {
      console.log(`Locations is ${props.location.pathname}`);
    };
  }, []);
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
