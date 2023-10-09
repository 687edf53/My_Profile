import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import langValid from "./assets/Context";

import "./App.css";

export default function App() {
  const [lang, setLang] = useState(true);

  const [translate] = useState({
    ar: {
      home: "الصفحة الرئيسية",
      lang: "اللغة",
      about: "حول",
      name: "687edf53 | محمد حسام",
    },
    en: {
      home: "Home",
      lang: "Lang",
      about: "About",
      name: "Mohammed Hossam | 687edf53",
    },
  });

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
