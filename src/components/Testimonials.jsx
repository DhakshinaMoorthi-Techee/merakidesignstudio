import { motion } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { fadeIn, fadeUp, stagger } from "../data/animations";
import { TeamMembers } from "../data/students";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmt = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmt, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="w-full max-w-7xl px-4 sm:px-6 md:px-16 py-8 sm:py-10 md:py-12 mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* HEADER */}
      <motion.h3
        variants={fadeUp}
        className="text-center text-green-700 font-medium text-lg sm:text-xl"
      >
        Testimonials
      </motion.h3>

      <motion.h2
        variants={fadeUp}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-1 px-4"
      >
        What Our Students Says
      </motion.h2>

      {/* BATCH DROPDOWN */}
      {/* <motion.div variants={fadeUp} className="flex flex-col items-center mt-6">
        <label className="mb-2">Select Batch:</label>
        <select
          className="w-48 border border-gray-300 rounded-lg px-4 py-2 text-sm
                       text-gray-700 bg-white shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <option>All Batch</option>
          <option>Batch 1</option>
          <option>Batch 2</option>
          <option>Batch 3</option>
        </select>
      </motion.div> */}

      {/* SLIDER */}
      <motion.div variants={fadeIn} className="relative mt-6 sm:mt-8 md:mt-10">
        {/* LEFT BUTTON - Hidden on mobile */}
        <motion.button
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2
                 bg-white shadow-md p-2 sm:p-3 rounded-full z-10
                 hover:bg-gray-100 cursor-pointer"
          aria-label="Scroll left"
        >
          <FiChevronLeft size={20} className="sm:w-[22px] sm:h-[22px]" />
        </motion.button>

        {/* RIGHT BUTTON - Hidden on mobile */}
        <motion.button
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2
                 bg-white shadow-md p-2 sm:p-3 rounded-full z-10
                 hover:bg-gray-100 cursor-pointer"
          aria-label="Scroll right"
        >
          <FiChevronRight size={20} className="sm:w-[22px] sm:h-[22px]" />
        </motion.button>

        {/* CARDS CONTAINER */}
        <motion.div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 sm:px-4 md:px-10 py-4 snap-x snap-mandatory"
          variants={stagger}
        >
          {TeamMembers.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative min-w-[280px] sm:min-w-[350px] md:min-w-[450px] lg:min-w-[500px] 
                 h-auto min-h-[240px] sm:min-h-[250px] md:min-h-[260px]
                 bg-white border border-gray-200
                 rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md
                 transition flex flex-col snap-center"
            >
              {/* LINKEDIN ICON – TOP RIGHT */}
              <motion.a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-8 md:right-15 text-gray-400 hover:text-green-700"
                aria-label={`${t.name}'s LinkedIn profile`}
              >
                <FaLinkedin className="text-lg sm:text-xl cursor-pointer" />
              </motion.a>

              {/* PROFILE */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <img
                  src={t.image}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  alt={t.name}
                />
                <div className="text-left min-w-0">
                  <h4 className="font-semibold text-green-700 text-sm sm:text-base truncate">
                    {t.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">
                    {t.degree}
                  </p>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-left overflow-y-auto flex-1">
                {t.review}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile scroll indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {TeamMembers.slice(0, 5).map((_, idx) => (
            <div
              key={idx}
              className="w-2 h-2 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;