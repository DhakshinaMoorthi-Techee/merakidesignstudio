import { useState } from "react";

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
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-green-700 text-xl tracking-wide uppercase">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
          Clear Your Doubts Here
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="divide-y">
        {faqs.map((faq, index) => {
          const isOpen = index === activeIndex;

          return (
            <div
              key={index}
              className="py-6 cursor-pointer"
              onClick={() =>
                setActiveIndex(isOpen ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>

                {/* Icon */}
                <span className="flex items-center justify-center w-7 h-7 border border-green-700 rounded-full text-green-700">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-gray-500 leading-relaxed text-left">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
