import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";// Ensure this path points to the correct component
import Skills from "./Components/Skills";

import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      {/* Header is outside Routes to display on all pages */}
      <Header />

      <Routes>
        {/* Home route */}
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
        
        {/* Interior route */}
        
      </Routes>
    </Router>
  );
};

export default App;
