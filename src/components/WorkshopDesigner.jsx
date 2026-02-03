import { FaVideo, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import CareerCover from "../assets/images/career-cover.jpg";
import { MdFrontHand } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";
import { fadeUp, scaleIn, stagger } from "../data/animations";
import { motion } from "framer-motion";

export default function WorkshopSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full max-w-7xl mx-auto px-4 sm:px-6">
      {/* TITLE */}
      <motion.h2
        className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        The only Workshop you need to be <br className="hidden sm:block" />
        <span className="text-green-700">among top 1% Designers</span>
      </motion.h2>

      {/* TOP CARDS */}
      <motion.div
        className="mt-10 sm:mt-12 md:mt-16 flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            icon: <FaVideo className="text-white text-lg sm:text-xl" />,
            title: "Online Learning",
            desc: "Engage in interactive, real-time sessions led by industry experts, ensuring in-depth understanding and instant feedback.",
          },
          {
            icon: <MdFrontHand className="text-white text-lg sm:text-xl" />,
            title: "Hands-on Projects",
            desc: "Apply your skills to real-world scenarios with practical assignments designed to enhance learning and portfolio building.",
          },
          {
            icon: <FaGraduationCap className="text-white text-lg sm:text-xl" />,
            title: "Dedicated Mentorship",
            desc: "Receive personalized guidance and support from experienced mentors to help achieve your learning goals.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="text-left w-full md:w-1/3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)]
                   rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-700 flex items-center justify-center mb-3 sm:mb-4">
              {card.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* BOTTOM SECTION */}
      <motion.div
        className="mt-6 sm:mt-8 max-w-6xl mx-auto bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)]
               rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          className="w-full md:w-[30%] lg:w-[25%] flex justify-center"
        >
          <div className="rounded-lg sm:rounded-[10px] overflow-hidden bg-white shadow-sm border border-gray-200">
            <img
              src={CareerCover}
              className="w-full max-w-[260px] h-[300px] sm:h-[340px] md:h-[360px] object-cover rounded-lg sm:rounded-[10px]"
              alt="Workshop"
            />
          </div>
        </motion.div>

        {/* TEXT LIST */}
        <motion.div className="w-full md:w-[70%] lg:w-[75%]" variants={stagger}>
          <ul className="space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-[15px] leading-relaxed text-left">
            {[
              "Understand the fundamentals of landscape and garden design, from concept to execution.",
              "Learn plant selection and composition to create functional, aesthetic outdoor spaces.",
              "Gain practical experience with AutoCAD, SketchUp, Lumion, Photoshop, and QGIS for design visualization.",
              "Master 3D modeling, rendering, and site planning for real-world landscape projects.",
              "Explore sustainable design principles — water management, lighting, and eco-materials.",
              "Work on hands-on projects guided by industry mentors and experts.",
              "Develop a strong design portfolio that reflects your creativity and practical skills.",
            ].map((text, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex gap-2 sm:gap-3 items-start"
              >
                <FaCheckCircle className="text-green-800 text-base sm:text-lg mt-0.5 sm:mt-1 flex-shrink-0" />
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>

          {/* BUTTONS */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={() =>
                document
                  .getElementById("register")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-900 text-white border px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg
                           hover:bg-white hover:text-green-900 hover:border-green-900
                           transition duration-300 text-sm sm:text-base w-full sm:w-auto"
            >
              Register Now
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("workshop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center justify-center gap-2 border border-gray-300
                           px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:border-green-900 transition text-sm sm:text-base w-full sm:w-auto"
            >
              Weekly Syllabus
              <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}