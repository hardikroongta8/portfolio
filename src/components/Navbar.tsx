import { useEffect } from "react";
import menuIcon from "../assets/images/menu_icon.png";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="fixed w-screen px-10 md:px-20 py-10  font-montserrat text-xl text-gray-400">
      <nav>
        <ul className="md:flex hidden justify-end gap-16">
          <li className="hover:text-white">
            <a href="#profile">Profile</a>
          </li>
          <li className="hover:text-white">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-white">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="md:hidden flex justify-end">
          <button>
            <img src={menuIcon} className="h-8" />
          </button>
        </div>
      </nav>
    </div>
  );
}
