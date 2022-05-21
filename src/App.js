import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./MyComponent/Footer/Footer";
import Home from "./MyComponent/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./MyComponent/About/About";
import Services from "./MyComponent/Services/Services";
import Blog from "./MyComponent/Blog/Blog";
import Contact from "./MyComponent/Contact/Contact";
import { HomeContext } from "./Context/homeContext";

const App = () => {
  const [theme, setTheme] = useState(false);
  return (
    <HomeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div
          style={
            theme
              ? { backgroundColor: "#222", color: "#fff" }
              : { backgroundColor: "#fff", color: "#222" }
          }
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HomeContext.Provider>
  );
};

export default App;
