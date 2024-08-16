import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="no-scrollbar md:snap-mandatory md:overflow-y-scroll h-screen">
      <Navbar />
      <div className="md:snap-center" id="p1">
        <Outlet />
      </div>
    </div>
  );
}
