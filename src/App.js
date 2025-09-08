import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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
import Maintaince from "./components/Maintaince";

import './App.css';

function Layout({ children }) {
  const location = useLocation();

  // hide navbar/footer for /maintaince route
  const hideLayout = location.pathname === "/maintaince";

  return (
    <>
      {!hideLayout && <Navbar />}
      <div className="App">{children}</div>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/maintaince" element={<Maintaince />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
