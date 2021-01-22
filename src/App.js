import React from 'react';
import './App.css';
import Banner from './components/Banner'
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div  className="App">
        <Banner/>
        <Nav/>
        <Services/>
        <About/>
        {/*<Prices/>*/}
        <Portfolio/>
        <Skills/>
        <Contact/>
    </div>
  );
}

export default App;
