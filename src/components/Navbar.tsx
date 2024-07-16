import { useEffect, useRef, useState } from "react";
import menuIcon from "../assets/images/menu_icon.png";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location]);

  return (
    <div
      ref={menuRef}
      className="fixed w-screen px-10 md:px-20 py-10  font-montserrat text-xl text-gray-400"
    >
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
          <button type="button" onClick={toggleMenu}>
            <img src={menuIcon} className="h-8" />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="origin-top-right absolute right-8 mt-2 w-40 rounded-md shadow-lg bg-zinc-900">
          <div className="py-1">
            <a href="#profile" className="block px-4 py-2 text-sm">
              Profile
            </a>
            <a href="#projects" className="block px-4 py-2 text-sm">
              Projects
            </a>
            <a href="#contact" className="block px-4 py-2 text-sm">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
