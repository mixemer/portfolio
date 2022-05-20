import React, {useState, useEffect} from 'react'

import { projects } from "./globals.js"

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from './pages/Skills';
import Projects from "./pages/Projects";
import Contact from './pages/Contact';
import Footer from './components/Footer';

import BackToTopBtn from './components/BackToTopBtn.js';
import PortfolioModal from './components/PortfolioModal';

function App() {
  const [active, setActive] = useState("");

  const modals = Object.keys(projects).map(function (key) {
    return projects[key].map((item) => <PortfolioModal item={item}/>)
  }
  );

  return (
    <div className="App">
      <Header active={active} setActive={setActive} />

      <Home setActive={setActive}/>
      <Skills setActive={setActive}/>
      <Projects setActive={setActive}/>
      <About setActive={setActive} />
      <Contact setActive={setActive}/>
      <Footer />

      {/* create this for each project? use a map */}
      {modals}

      <BackToTopBtn />
    </div>
  );
}

export default App;
