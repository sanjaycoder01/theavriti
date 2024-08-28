import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Techno from "./Components/Techno";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#111] text-white">
      <Navbar />
      <Hero />
      <About />
      <Techno />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
