import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
