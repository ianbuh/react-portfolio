import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from './components/ProjectDetail';
import Resume from './components/Resume';
import Hobbies from './components/Hobbies';

// A component for the main page content
const Home = () => (
  <main>
    <div id="home">
      <Hero />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="showcase">
      <Showcase />
    </div>
     <div id="resume">
      <Resume />
    </div>
         <div id="hobbies">
      <Hobbies />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </main>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Hide Navbar and Footer on project detail pages if desired
  const isDetailPage = location.pathname.startsWith('/project/');

  return (
    <div className="App font-sans bg-primary-dark">
      {!isDetailPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
      {!isDetailPage && <Footer />}
    </div>
  );
}
