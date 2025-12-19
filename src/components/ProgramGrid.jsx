import { useState } from "react";
import { programData } from "../data/programData";
import ProgramCard from "./ProgramCard";
import ProgramModal from "./ProgramModal";
import { stagger } from "../data/animations";
import { motion } from "framer-motion";

export default function ProgramGrid() {
  const [activeWeek, setActiveWeek] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        className="grid md:grid-cols-3 gap-10"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {programData.map((item, index) => (
          <ProgramCard
            key={index}
            data={item}
            onClick={() => setActiveWeek(item)}
          />
        ))}
      </motion.div>

      <ProgramModal data={activeWeek} onClose={() => setActiveWeek(null)} />
    </section>
  );
}
