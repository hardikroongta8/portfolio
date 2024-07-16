import Contact from "./Contact";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="md:snap-y md:relative md:transition-all md:touch-none md:scroll-smooth no-scrollbar md:snap-mandatory md:overflow-y-scroll h-screen">
      <Navbar />
      <div className="md:snap-center" id="p1">
        <Profile />
      </div>
      <div className="md:h-screen" />
      <div className="md:snap-center" id="p2">
        <Projects />
      </div>
      <div className="md:h-screen" />
      <div className="md:snap-center" id="p3">
        <Contact />
      </div>
    </div>
  );
}
