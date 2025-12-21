import { useState } from "react";
import { fadeUp, stagger } from "../data/animations";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does Meraki Design Studio offer?",
    answer: (
      <ul className="list-decimal pl-5 space-y-1">
        <li>Residential & commercial landscape design</li>
        <li>2D drawings & 3D visualizations</li>
        <li>Plant selection & plant treatment</li>
        <li>Hardscape planning (pergola, decks, BBQ, pathways)</li>
        <li>Swimming pool design</li>
        <li>Irrigation design</li>
        <li>Project coordination & site consultation (India + UAE)</li>
      </ul>
    ),
  },
  {
    question: "Do you offer online landscape design classes?",
    answer:
      "Yes, we offer both online and offline landscape design classes with practical and real-time project guidance.",
  },
  {
    question: "Who can join the Landscape Design Workshop?",
    answer:
      "Students, beginners, architects, civil engineers, gardeners, landscape enthusiasts, and working professionals can join.",
  },
  {
    question: "What software will I learn in the workshop?",
    answer:
      "AutoCAD, SketchUp, Lumion, and basic 3D visualization tools used in professional landscape projects.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer:
      "Classes are conducted live with interaction, demonstrations, and real-time doubt clearing.",
  },
  {
    question: "Will I get a certificate after the workshop?",
    answer:
      "Yes, a verified certificate will be provided after successful completion of the workshop.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* HEADER */}
      <motion.div
        className="text-center mb-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-green-700 text-xl tracking-wide uppercase">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
          Clear Your Doubts Here
        </h2>
      </motion.div>

      {/* FAQ ITEMS */}
      <motion.div
        className="divide-y"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {faqs.map((faq, index) => {
          const isOpen = index === activeIndex;

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              className="py-6 cursor-pointer"
              onClick={() => setActiveIndex(isOpen ? null : index)}
            >
              {/* QUESTION */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>

                {/* ICON */}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-7 h-7
                         border border-green-700 rounded-full
                         text-green-700 text-lg"
                >
                  {isOpen ? "−" : "+"}
                </motion.span>
              </div>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 text-gray-500 leading-relaxed text-left">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
