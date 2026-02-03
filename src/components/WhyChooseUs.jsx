import { GoLightBulb } from "react-icons/go";
import { LuHandshake, LuShapes } from "react-icons/lu";
import { PiHandFist, PiPlant } from "react-icons/pi";
import { RiBookShelfLine } from "react-icons/ri";
import { fadeUp, scaleIn, stagger } from "../data/animations";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const featuresTop = [
    {
      icon: <PiHandFist />,
      title: "Hands-on Learning",
      desc: "Every session is built around practice, not just lectures. You'll design, experiment, and build confidence through real projects.",
    },
    {
      icon: <LuShapes />,
      title: "Expert Mentorship",
      desc: "Our instructors are practicing designers and landscape professionals who bring practical insights, not just textbook knowledge.",
    },
    {
      icon: <RiBookShelfLine />,
      title: "Comprehensive Curriculum",
      desc: "From plant science and spatial design to software mastery — AutoCAD, SketchUp, Lumion, Photoshop, QGIS — we cover every essential skill.",
    },
  ];

  const featuresBottom = [
    {
      icon: <GoLightBulb />,
      title: "Creative Environment",
      desc: "We encourage exploration, discussion, and collaboration. Every idea is valued, every voice heard.",
    },
    {
      icon: <LuHandshake />,
      title: "Focus on Sustainability",
      desc: "Our workshops emphasize designing with nature, not against it — teaching methods that balance aesthetics with environmental responsibility.",
    },
    {
      icon: <PiPlant />,
      title: "Career Growth",
      desc: "Whether you're a student, architect, or enthusiast, our programs equip you with skills and a portfolio that stand out in the design world.",
    },
  ];

  return (
    <section className="w-full max-w-7xl bg-white pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-16 mx-auto px-4 sm:px-6">
      {/* ---- Heading ---- */}
      <motion.div
        className="text-center mb-10 sm:mb-12 md:mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="text-[#1F7F4C] text-base sm:text-lg font-medium tracking-wide">
          Why Meraki?
        </h4>

        <h2 className="mt-2 text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold text-[#111] px-4">
          Why you should choose us
        </h2>
      </motion.div>

      {/* ---- Features Grid ---- */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-y-14 relative">
          {featuresTop.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative px-2 sm:px-4 md:px-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1F7F4C] flex items-center justify-center text-white text-lg sm:text-xl shrink-0">
                  {item.icon}
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-base sm:text-[17px] text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              {index < 2 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-200"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gray-200 my-10 sm:my-12 md:my-14"></div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-y-14 relative">
          {featuresBottom.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative px-2 sm:px-4 md:px-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1F7F4C] flex items-center justify-center text-white text-lg sm:text-xl shrink-0">
                  {item.icon}
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-base sm:text-[17px] text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              {index < 2 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-200"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ---- Curriculum Section ---- */}
      <motion.div
        className="mt-16 sm:mt-20 md:mt-24 text-center px-4"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="text-[#1F7F4C] text-lg sm:text-xl font-medium">Curriculum</h4>

        <h2 className="mt-2 text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold text-[#111] leading-tight">
          What you'll learn in this <br className="hidden sm:block" /> Workshop
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 sm:mt-6 bg-[#1F7F4C] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md
                 hover:bg-[#166b3f] transition text-sm sm:text-base"
          onClick={() =>
            document
              .getElementById("register")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Register Now
        </motion.button>
      </motion.div>
    </section>
  );
}