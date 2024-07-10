import menuIcon from "../assets/images/menu_icon.png";

export default function Navbar() {
  return (
    <div className="fixed w-screen px-10 md:px-20 py-10  font-montserrat text-xl text-white">
      <ul className="md:flex hidden justify-end gap-16">
        <li>Profile</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="md:hidden flex justify-end">
        <button>
          <img src={menuIcon} className="h-8" />
        </button>
      </div>
    </div>
  );
}
