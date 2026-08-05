import { FaQuoteLeft } from "react-icons/fa";
import { fadeLeft, fadeRight, fadeUpSoft } from "../data/animations";
import { motion } from "framer-motion";
import FounderImage from "../assets/images/Founder-image.png";

export default function AboutFounder() {
  return (
    <section id="about" className="w-full max-w-7xl bg-white py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8 mx-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
        
        {/* LEFT TEXT SECTION */}
        <motion.div
          className="text-gray-800 text-left order-2 lg:order-1"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Quote Icon */}
          <motion.div
            variants={fadeUpSoft}
            className="text-[#1F7F4C] text-3xl sm:text-4xl mb-3 sm:mb-4"
          >
            <FaQuoteLeft />
          </motion.div>

          <motion.h2
            variants={fadeUpSoft}
            className="text-lg sm:text-xl md:text-[22px] font-semibold text-gray mb-2 sm:mb-5 md:mb-4"
          >
            MEET OUR FOUNDER
          </motion.h2>

          <motion.p
            variants={fadeUpSoft}
            className="text-sm sm:text-base md:text-[18px] leading-relaxed text-gray-700 mb-4 sm:mb-5"
          >
            Dhanapriya. A <br/>
            Founder & Landscape Designer | Eyrie Studio
          </motion.p>

          <motion.p
            variants={fadeUpSoft}
            className="text-sm sm:text-base md:text-[14px] leading-relaxed text-gray-500  mb-4 sm:mb-5"
          >
            I am A. Dhanapriya, the Founder of Eyrie Studio, A design studio built on the belief that exceptional landscapes are created through the perfect balance of nature, creativity, and technical expertise.
          </motion.p>

           <motion.p
            variants={fadeUpSoft}
            className="text-sm sm:text-base md:text-[14px] leading-relaxed text-gray-500  mb-4 sm:mb-5"
          >
            My journey began with a Bachelor of Science in Agriculture, where I developed a deep understanding of plant science, soil systems, irrigation engineering, and sustainable environmental practices. This strong scientific foundation, combined with a passion for transforming outdoor spaces, naturally led me into the world of landscape architecture.
          </motion.p>

           <motion.p
            variants={fadeUpSoft}
            className="text-sm sm:text-base md:text-[14px] leading-relaxed text-gray-500  mb-4 sm:mb-5"
          >
            Over the past 5+ years, I have had the opportunity to design, manage, and execute diverse landscape projects across Kerala, Tamil Nadu, Karnataka, and the United Arab Emirates. Each project has strengthened my belief that landscapes should not only be visually striking but also functional, sustainable, and thoughtfully connected to their surroundings.
          </motion.p>

          <motion.p
            variants={fadeUpSoft}
            className="text-sm sm:text-base md:text-[14px] leading-relaxed text-gray-500"
          >
            At Eyrie Studio, our vision extends beyond creating beautiful landscapes. We are committed to designing environments that inspire people, enhance everyday living, and stand the test of time. Through innovative design, technical precision, and a client-focused approach, we transform ideas into meaningful outdoor experiences.
          </motion.p>

        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-[540px] sm:h-[580px] md:h-[620px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
            <img
              src={FounderImage}
              alt="Founder Dhana Priya A"
              className="w-full h-full object-cover"
            />

            {/* Bottom Black Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 md:h-32 bg-linear-to-t from-black/70 to-transparent"></div>

            {/* Name & Role */}
            <motion.div
              variants={fadeUpSoft}
              className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white"
            >
              <p className="text-sm sm:text-[15px] font-semibold text-left">
                DHANA PRIYA. A
              </p>
              <p className="text-xs sm:text-[13px] opacity-70">
                Landscape Designer & Project Coordinator
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}