import { motion } from "framer-motion";
import { fadeUp, stagger } from "../data/animations";

import SketchUp from "../assets/images/sketchup-logo.png";
import Photoshop from "../assets/images/photoshop-logo.png";
import Autocad from "../assets/images/autocad-logo.png";
import Qgis from "../assets/images/qgis-logo.png";
import Lumion from "../assets/images/lumion-logo.webp";

export default function ToolsSection() {
  return (
    <motion.section
      className="text-center pt-16 pb-20 bg-white px-4 md:px-10 max-w-7xl m-auto"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-semibold text-gray-800"
      >
        You’ll Learn Tools Like
      </motion.h2>

      {/* Row 1 */}
      <motion.div
        variants={stagger}
        className="flex flex-wrap justify-center gap-16 md:gap-32 mt-20"
      >
        {[SketchUp, Photoshop].map((logo, i) => (
          <motion.img
            key={i}
            variants={fadeUp}
            src={logo}
            className="h-16 md:h-24 object-contain cursor-pointer
              transition-transform duration-300 ease-out hover:scale-110"
          />
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div
        variants={stagger}
        className="flex flex-wrap justify-center gap-16 md:gap-32 mt-14"
      >
        {[Autocad, Qgis, Lumion].map((logo, i) => (
          <motion.img
            key={i}
            variants={fadeUp}
            src={logo}
            className="h-16 md:h-24 object-contain cursor-pointer
              transition-transform duration-300 ease-out hover:scale-110"
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
