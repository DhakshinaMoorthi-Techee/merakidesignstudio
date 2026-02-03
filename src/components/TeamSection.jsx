import React, { useRef } from "react";
import { FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { fadeUp, stagger, cardAnim } from "../data/animations";
import { motion } from "framer-motion";
import { TeamMembers } from "../data/students";

export default function TeamSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-16 mx-auto">
      {/* HEADING */}
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-snug px-2 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        People just like you who had joined <br className="hidden sm:block" />
        <span className="text-green-700">Workshop</span> and changed their life
      </motion.h2>

      {/* CONTAINER WITH SCROLL */}
      <div className="relative">
        {/* LEFT SCROLL BUTTON - Desktop Only */}
        <motion.button
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
                     bg-white shadow-lg p-3 rounded-full z-20
                     hover:bg-gray-50 cursor-pointer items-center justify-center"
          aria-label="Scroll left"
        >
          <FaChevronLeft size={20} />
        </motion.button>

        {/* RIGHT SCROLL BUTTON - Desktop Only */}
        <motion.button
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
                     bg-white shadow-lg p-3 rounded-full z-20
                     hover:bg-gray-50 cursor-pointer items-center justify-center"
          aria-label="Scroll right"
        >
          <FaChevronRight size={20} />
        </motion.button>

        {/* MEMBERS CONTAINER */}
        <motion.div
          ref={scrollRef}
          className="
            /* Mobile: Horizontal Scroll */
            flex md:grid
            gap-4 sm:gap-5 md:gap-6 lg:gap-8
            overflow-x-auto md:overflow-x-visible
            scrollbar-hide scroll-smooth
            snap-x snap-mandatory md:snap-none
            pb-4 md:pb-0
            px-2 md:px-0
            /* Desktop: Grid Layout */
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TeamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="
                /* Mobile: Fixed Width Cards */
                flex-shrink-0
                w-[280px] sm:w-[300px] md:w-auto
                snap-center md:snap-align-none
                /* Common Styles */
                text-left transition-all duration-300 rounded-xl group
                bg-white md:bg-transparent
                shadow-sm md:shadow-none
                hover:shadow-md md:hover:shadow-lg
                p-3 md:p-0
              "
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-lg md:rounded-xl mb-3 sm:mb-4 aspect-[3/4] relative">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Member Info */}
              <div className="px-1">
                <h3 className="text-base sm:text-lg font-semibold truncate mb-1">
                  {member.name}
                </h3>
                <p className="text-green-700 text-xs sm:text-sm truncate mb-0.5">
                  {member.degree}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 truncate mb-2">
                  {member.company}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 sm:gap-4">
                  <a 
                    target="_blank" 
                    href={member.linkedin}
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn profile`}
                    className="text-gray-400 hover:text-green-700 transition-colors duration-200"
                  >
                    <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Scroll Indicator */}
        <div className="flex md:hidden justify-center gap-1.5 mt-4">
          {TeamMembers.slice(0, 8).map((_, idx) => (
            <div
              key={idx}
              className="w-1.5 h-1.5 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <p className="md:hidden text-center text-xs text-gray-400 mt-3">
          Swipe to see more →
        </p>
      </div>

      {/* Add this CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}