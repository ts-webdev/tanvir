import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Marqauee from "./components/Marqauee";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 1,
      behavior: "instant", // or "smooth"
    });
  }, []);
  return (
    <>
      <Navbar />
      <header className="bg-linear-to-b from-[#255F38]/80 to-[#18230F]/50 min-h-[90vh]">
        <Banner />
        <Marqauee />
      </header>
      <main>
        <AboutMe />
        <MySkills />
        <Projects />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;
