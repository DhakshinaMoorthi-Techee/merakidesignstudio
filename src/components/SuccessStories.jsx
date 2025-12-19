import { useState, useRef } from "react";
import StudentReview from "../assets/Videos/StudentReview.mp4";
import { cardAnim, fadeUp, stagger } from "../data/animations";
import { motion } from "framer-motion";

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRefs = useRef([]);

  const stories = [
    { name: "Albert Flores", role: "Landscape Designer", video: StudentReview },
    {
      name: "Leslie Alexander",
      role: "Landscape Designer",
      video: StudentReview,
    },
    {
      name: "Courtney Henry",
      role: "Landscape Designer",
      video: StudentReview,
    },
    { name: "Emily Willson", role: "Landscape Designer", video: StudentReview },
  ];

  const handlePlayPause = (index) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });

    const selected = videoRefs.current[index];
    if (!selected) return;

    if (activeIndex === index) {
      selected.pause();
      setActiveIndex(null);
    } else {
      selected.play();
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-20 bg-white max-w-7xl m-auto">
      {/* TITLE */}
      <motion.h2
        className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Success Stories <br /> from Workshop
      </motion.h2>

      {/* CARDS */}
      <motion.div
        className="flex items-center justify-center gap-8 flex-wrap max-w-7xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stories.map((item, index) => (
          <motion.div
            key={index}
            variants={cardAnim}
            whileHover={{ y: -8 }}
            className="relative w-64 h-[420px] rounded-2xl overflow-hidden shadow-lg bg-gray-900 group"
          >
            {/* VIDEO */}
            <video
              src={item.video}
              muted
              loop
              preload="auto"
              playsInline
              autoPlay={false}
              className="absolute inset-0 w-full h-full object-fill"
              onLoadedData={(e) => {
                e.target.currentTime = 0;
              }}
              onError={() => console.log("Video failed:", item.video)}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition"></div>

            {/* TEXT */}
            <div className="absolute bottom-5 left-5 text-white z-10">
              <p className="font-semibold text-[15px]">{item.name}</p>
              <p className="text-sm opacity-80">{item.role}</p>
            </div>

            {/* PLAY BUTTON */}
            <motion.button
              onClick={() => handlePlayPause(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-lg bg-black bg-opacity-40 
                     flex items-center justify-center backdrop-blur-sm 
                     hover:bg-opacity-60 transition z-10"
            >
              {activeIndex === index ? (
                <span className="text-white text-lg">⏸</span>
              ) : (
                <span className="text-white text-lg">▶</span>
              )}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
