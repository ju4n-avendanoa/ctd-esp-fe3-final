import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ContextGlobal } from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";

function App() {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme === "dark" ? "dark" : ""}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
