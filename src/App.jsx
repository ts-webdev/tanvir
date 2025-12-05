import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Marqauee from "./components/Marqauee";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <header className="bg-linear-to-t from-[#255F38]/80 to-[#18230F]/50 h-screen">
        <Navbar />
        <Banner />
        <Marqauee />
      </header>
      <main>
        <AboutMe />
        <MySkills/>
        <Projects/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
