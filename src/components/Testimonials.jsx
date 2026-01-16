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
      className="w-7xl px-6 md:px-16 py-12 m-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* HEADER */}
      <motion.h3
        variants={fadeUp}
        className="text-center text-green-700 font-medium text-xl"
      >
        Testimonials
      </motion.h3>

      <motion.h2
        variants={fadeUp}
        className="text-center text-3xl font-bold mt-1"
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
      <motion.div variants={fadeIn} className="relative mt-10">
        {/* LEFT BUTTON */}
        <motion.button
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 -translate-y-1/2
                 bg-white shadow-md p-3 rounded-full z-10
                 hover:bg-gray-100 cursor-pointer"
        >
          <FiChevronLeft size={22} />
        </motion.button>

        {/* RIGHT BUTTON */}
        <motion.button
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/2 -translate-y-1/2
                 bg-white shadow-md p-3 rounded-full z-10
                 hover:bg-gray-100 cursor-pointer"
        >
          <FiChevronRight size={22} />
        </motion.button>

        {/* CARDS CONTAINER */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden scrollbar-hide scroll-smooth px-10 py-4"
          variants={stagger}
        >
          {TeamMembers.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative min-w-[500px] h-[260px]
                 bg-white border border-gray-200
                 rounded-xl p-6 shadow-sm hover:shadow-md
                 transition flex flex-col"
            >
              {/* LINKEDIN ICON – TOP RIGHT */}
              <motion.a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="absolute top-8 right-15 text-gray-400 hover:text-green-700"
              >
                <FaLinkedin className="text-xl cursor-pointer" />
              </motion.a>

              {/* PROFILE */}
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={t.name}
                />
                <div className="text-left">
                  <h4 className="font-semibold text-green-700">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.degree}</p>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-sm text-gray-700 mt-3 leading-relaxed text-left">
                {t.review}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
