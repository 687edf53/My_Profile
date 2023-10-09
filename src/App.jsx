import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import langValid from "./assets/Context";

import "./App.css";
import {lang, setLang, translate} from './assets/Data/data'

export default function App() {


  const [obj] = useState({
    lang,
    setValidLang: setLang,
    translate: translate,
  });

  // Function to toggle the lang state
  

  return (
    <>
      <Router>
        <langValid.Provider value={obj}>
          <Navbar />
        </langValid.Provider>
        <Routes>
          <Route path="My_Profile/about" Component={About} />
          <Route path="/My_Profile/" Component={Home} />
        </Routes>
      </Router>
    </>
  );
}
