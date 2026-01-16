import { LuArrowUp } from "react-icons/lu";
import FooterLogo from "../assets/images/footer-logo.png";
import { fadeIn, fadeUp, stagger } from "../data/animations";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-green-900 text-white">
      <motion.div
        className="max-w-7xl mx-auto px-8 pt-16 pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TOP ROW */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 items-start gap-10"
          variants={stagger}
        >
          {/* LEFT: LOGO + SCROLL */}
          <motion.div variants={fadeUp} className="space-y-10">
            {/* Logo */}
            <motion.img
              src={FooterLogo}
              alt="Meraki Design Studio"
              className="h-14"
              variants={fadeIn}
            />

            {/* Reach to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm
                     text-white/80 hover:text-white transition"
            >
              <LuArrowUp size={18} />
              <span>Reach to top</span>
            </motion.button>
          </motion.div>

          {/* CENTER EMPTY */}
          <div />

          {/* RIGHT LINKS */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-20">
            {/* Navigation */}
            <motion.div variants={fadeUp} className="text-left">
              <h4 className="text-sm font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm text-white/60">
                {["About", "Workshop", "Contact", "Register"].map((item) => (
                  <li key={item}>
                    <a
                      onClick={() =>
                        document
                          .getElementById(item.toLowerCase().replace(" ", ""))
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-white transition cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="text-left">
              <h4 className="text-sm font-semibold mb-4">Socials</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <a
                    href="https://wa.me/916238316758"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/meraki.design.studio_/"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          variants={fadeUp}
          className="border-t border-white/10 mt-16 pt-6"
        >
          <p className="text-xs text-white/80">
            © Meraki Design Studio {year} – All Rights Reserved by Meraki Design
            Studio
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
