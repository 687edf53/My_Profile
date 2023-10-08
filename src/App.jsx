import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" Component={About} />
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </>
  );
}
