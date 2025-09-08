import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./components/404";
import About from "./components/about";
import Contact from "./components/contact";
import Feature from "./components/feature";
import Footer from "./components/footer"; 
import Project from "./components/project";
import Service from "./components/service";
import Team from "./components/team";
import Navbar from "./components/navbar";
import Home from "./components/home";

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        {/* Example Navbar / Header could go here */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Service />} />
          <Route path="/team" element={<Team />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer (always visible) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
