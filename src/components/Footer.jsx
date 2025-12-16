import { LuArrowUp } from "react-icons/lu";
import MerakiLogo from "../assets/images/meraki-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#194D2F] text-white">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left */}
          <div className="space-y-10 bg-white rounded-2xl py-2">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={MerakiLogo}
                alt="Meraki Design Studio"
                className="h-20"
              />
            </div>

            {/* Reach to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-sm text-[#194D2F] hover:text-white transition cursor-pointer"
            >
              <LuArrowUp size={20} />
              <span>Reach to top</span>
            </button>
          </div>

          {/* Spacer */}
          <div />

          {/* Right */}
          <div className="grid grid-cols-2 gap-16">
            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/workshop" className="hover:text-white">Workshop</a></li>
                <li><a href="/works" className="hover:text-white">Works</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Socials</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a
                    href="https://wa.me/XXXXXXXXXX"
                    target="_blank"
                    className="hover:text-white"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6">
          <p className="text-xs text-white/70">
            © Meraki Design Studio 2025 - All Rights Reserved by Meraki Design Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
