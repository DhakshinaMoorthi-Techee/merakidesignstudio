import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import MerakiLogo from "../assets/images/meraki-logo.png";
import { LuArrowDown, LuChevronDown, LuMoveDown } from "react-icons/lu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["About", "Workshop", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center py-3 px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={MerakiLogo} alt="Meraki" className="w-14" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-green-700 transition"
            >
              <div className="flex items-center gap-1">
                {item}{" "}
                {item == "Products" && (
                  <span>
                    <LuChevronDown size={20} />
                  </span>
                )}
              </div>
            </li>
          ))}

          <button className="bg-green-900 text-white font-normal px-4 py-2 rounded-lg hover:bg-white hover:text-green-900 hover:border hover:border-green-900 transition duration-300 cursor-pointer">
            Register Now
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 px-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-700 hover:text-green-700 transition"
            >
              {item}
            </li>
          ))}

          <button className="bg-green-900 text-white px-4 py-2 rounded-lg  hover:bg-white hover:text-green-900 hover:border hover:border-green-900 transition duration-300 w-fit cursor-pointer">
            Register Now
          </button>
        </ul>
      </div>
    </nav>
  );
}
