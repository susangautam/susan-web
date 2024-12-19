import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
  
      <Header />

      <Routes>
      
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Footer/>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
