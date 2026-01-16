import { FaVideo, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import CareerCover from "../assets/images/career-cover.jpg";
import { MdFrontHand } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";
import { fadeUp, scaleIn, stagger } from "../data/animations";
import { motion } from "framer-motion";

export default function WorkshopSection() {
  return (
    <section className="py-20 bg-white max-w-7xl m-auto">
      {/* TITLE */}
      <motion.h2
        className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        The only Workshop you need to be <br />
        <span className="text-green-700">among top 1% Designers</span>
      </motion.h2>

      {/* TOP CARDS */}
      <motion.div
        className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            icon: <FaVideo className="text-white text-xl" />,
            title: "Online Learning",
            desc: "Engage in interactive, real-time sessions led by industry experts, ensuring in-depth understanding and instant feedback.",
          },
          {
            icon: <MdFrontHand className="text-white text-xl" />,
            title: "Hands-on Projects",
            desc: "Apply your skills to real-world scenarios with practical assignments designed to enhance learning and portfolio building.",
          },
          {
            icon: <FaGraduationCap className="text-white text-xl" />,
            title: "Dedicated Mentorship",
            desc: "Receive personalized guidance and support from experienced mentors to help achieve your learning goals.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="text-left w-full md:w-1/3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)]
                   rounded-2xl p-6 border border-gray-200"
          >
            <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* BOTTOM SECTION */}
      <motion.div
        className="mt-6 max-w-6xl mx-auto bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)]
               rounded-3xl p-10 border border-gray-200 flex flex-col md:flex-row items-center gap-10"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          className="w-full md:w-[25%] flex justify-center"
        >
          <div className="rounded-[10px] overflow-hidden bg-white shadow-sm border border-gray-200">
            <img
              src={CareerCover}
              className="w-[260px] h-[360px] object-cover rounded-[10px]"
              alt="Workshop"
            />
          </div>
        </motion.div>

        {/* TEXT LIST */}
        <motion.div className="w-full md:w-[75%]" variants={stagger}>
          <ul className="space-y-4 text-gray-800 text-[15px] leading-relaxed text-left">
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
                className="flex gap-3 items-start"
              >
                <FaCheckCircle className="text-green-800 text-lg mt-1" />
                {text}
              </motion.li>
            ))}
          </ul>

          {/* BUTTONS */}
          <motion.div variants={fadeUp} className="flex gap-4 mt-8">
            <button
              onClick={() =>
                document
                  .getElementById("register")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-900 text-white border px-6 py-3 rounded-lg
                           hover:bg-white hover:text-green-900 hover:border-green-900
                           transition duration-300"
            >
              Register Now
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("workshop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2 border border-gray-300
                           px-6 py-3 rounded-lg hover:border-green-900 transition"
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
