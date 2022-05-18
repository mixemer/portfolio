import React, {useState, useEffect} from 'react'

import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from './pages/Skills';
import Projects from "./pages/Projects";
import Contact from './pages/Contact';


import PortfolioModal from './components/PortfolioModal';

function App() {
  const [active, setActive] = useState("");

  return (
    <div className="App">
      <Header active={active} setActive={setActive} />

      <Home setActive={setActive}/>
      <About setActive={setActive} />
      <Skills setActive={setActive}/>
      <Projects setActive={setActive}/>
      <Contact setActive={setActive}/>

      {/* create this for each project? use a map */}
      <PortfolioModal />
    </div>
  );
}

export default App;
