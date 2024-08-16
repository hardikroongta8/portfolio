import { useEffect, useRef, useState } from "react";
import menuIcon from "../assets/images/menu_icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={menuRef}
      className="fixed w-screen px-10 md:px-20 py-10  font-montserrat text-xl text-gray-400"
    >
      <nav>
        <ul className="md:flex hidden justify-end gap-16">
          <li className="hover:text-white">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden flex justify-end">
          <button type="button" onClick={toggleMenu}>
            <img src={menuIcon} className="h-8" />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="origin-top-right absolute z-10 right-8 mt-2 w-40 rounded-md shadow-lg bg-zinc-900">
          <div className="py-1">
            <Link to="/profile" className="block px-4 py-2 text-sm">
              Profile
            </Link>
            <Link to="/projects" className="block px-4 py-2 text-sm">
              Projects
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-sm">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
