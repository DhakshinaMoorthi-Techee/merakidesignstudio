import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import MerakiLogo from "../assets/images/meraki-logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["About", "Workshop", "Contact", "Products"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center py-3 px-10">
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
              {item}
            </li>
          ))}

          <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
            Register Now
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
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

          <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition w-fit">
            Register Now
          </button>
        </ul>
      </div>
    </nav>
  );
}
