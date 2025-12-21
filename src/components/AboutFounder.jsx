import { FaQuoteLeft } from "react-icons/fa";
import { fadeLeft, fadeRight, fadeUpSoft } from "../data/animations";
import { motion } from "framer-motion";

export default function AboutFounder() {
  return (
    <section id="about" className="w-7xl bg-white py-14 px-6 m-auto">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
    
    {/* LEFT TEXT SECTION */}
    <motion.div
      className="text-gray-800 text-left"
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Quote Icon */}
      <motion.div
        variants={fadeUpSoft}
        className="text-[#1F7F4C] text-4xl mb-4"
      >
        <FaQuoteLeft />
      </motion.div>

      <motion.h2
        variants={fadeUpSoft}
        className="text-[22px] font-semibold text-gray-900 mb-6"
      >
        ABOUT THE FOUNDER
      </motion.h2>

      <motion.p
        variants={fadeUpSoft}
        className="text-[18px] leading-relaxed text-gray-500 mb-5"
      >
        I am A. Dhanapriya, the founder of Meraki Design Studio—a space where 
        creativity, nature, and technical excellence come together to craft 
        meaningful landscape experiences.
      </motion.p>

      <motion.p
        variants={fadeUpSoft}
        className="text-[18px] leading-relaxed text-gray-500"
      >
        My journey began with a Bachelor of Science in Agriculture, which gave 
        me a strong foundation in plant science, soil behavior, irrigation systems, 
        and environmental management. With this scientific knowledge and a deep 
        passion for outdoor spaces, I entered the world of landscape design, where 
        I have spent the last five years designing, managing, and delivering 
        landscape projects across Kerala, Tamil Nadu, UAE and Karnataka.
      </motion.p>
    </motion.div>

    {/* RIGHT IMAGE SECTION */}
    <motion.div
      className="flex justify-center"
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative w-[360px] h-[480px] rounded-2xl overflow-hidden shadow-md">
        <img
          src="/src/assets/images/Founder-image.jpg"
          alt="Founder"
          className="w-full h-full object-cover scale-200"
        />

        {/* Bottom Black Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Name & Role */}
        <motion.div
          variants={fadeUpSoft}
          className="absolute bottom-4 left-4 text-white"
        >
          <p className="text-[15px] font-semibold text-left">
            DHANA PRIYA. A
          </p>
          <p className="text-[13px] opacity-70">
            Landscape Designer & Project Coordinator
          </p>
        </motion.div>
      </div>
    </motion.div>

  </div>
</section>
  );
}
