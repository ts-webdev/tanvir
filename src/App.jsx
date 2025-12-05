import Banner from "./components/Banner";
import Marqauee from "./components/Marqauee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="bg-linear-to-t from-[#255F38]/80 to-[#18230F]/50 h-screen">
     <Navbar/>
     <Banner/>
     <Marqauee/>
      </header>
    </>
  );
}

export default App;
