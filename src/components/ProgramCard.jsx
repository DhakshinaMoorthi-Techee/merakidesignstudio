import { LuArrowUpRight, LuClock4, LuGraduationCap } from "react-icons/lu";
import { programCardAnim } from "../data/animations";
import { motion } from "framer-motion";

export default function ProgramCard({ data, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      variants={programCardAnim}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group text-left w-full cursor-pointer
                 transition-shadow duration-300"
    >
      {/* IMAGE */}
      <div className="rounded-xl overflow-hidden mb-4">
        <motion.img
          src={data.image}
          alt={data.title}
          className="h-60 w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* WEEK */}
      <p className="text-sm text-green-800 font-medium mb-1">{data.week}</p>

      {/* TITLE + ARROW */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {data.title}
        </h3>

        <motion.span
          whileHover={{ x: 4, y: -4 }}
          transition={{ duration: 0.3 }}
          className="mt-1 text-gray-400 group-hover:text-gray-900"
        >
          <LuArrowUpRight size={18} />
        </motion.span>
      </div>

      {/* META */}
      <div className="flex gap-4 mt-3 text-sm text-gray-700">
        <motion.span
          whileHover={{ y: -2 }}
          className="flex items-center gap-1 bg-gray-100 rounded-lg p-1"
        >
          <LuGraduationCap size={16} /> {data.topics} Topics
        </motion.span>

        <motion.span
          whileHover={{ y: -2 }}
          className="flex items-center gap-1 bg-gray-100 rounded-lg p-1"
        >
          <LuClock4 size={16} /> {data.hours} Hours
        </motion.span>
      </div>
    </motion.button>
  );
}
