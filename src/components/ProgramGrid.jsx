import { useState } from "react";
import { programData } from "../data/programData";
import ProgramCard from "./ProgramCard";
import ProgramModal from "./ProgramModal";

export default function ProgramGrid() {
  const [activeWeek, setActiveWeek] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-10">
        {programData.map((item, index) => (
          <ProgramCard
            key={index}
            data={item}
            onClick={() => setActiveWeek(item)}
          />
        ))}
      </div>

      <ProgramModal
        data={activeWeek}
        onClose={() => setActiveWeek(null)}
      />
    </section>
  );
}
