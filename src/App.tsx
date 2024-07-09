import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <div className="bg-black h-screen px-10">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
