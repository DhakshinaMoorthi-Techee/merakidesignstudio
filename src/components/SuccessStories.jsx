import { useState, useRef } from "react";
import { cardAnim, fadeUp, stagger } from "../data/animations";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRefs = useRef([]);
  const scrollRef = useRef(null);

  const stories = [
    {
      name: "Albert Flores",
      role: "Landscape Designer",
      video: "https://youtube.com/shorts/6Vwf8EYdjK8?feature=share",
    },
    {
      name: "Leslie Alexander",
      role: "Landscape Designer",
      video: "https://youtube.com/shorts/6Vwf8EYdjK8?feature=share",
    },
    {
      name: "Courtney Henry",
      role: "Landscape Designer",
      video: "https://youtube.com/shorts/6Vwf8EYdjK8?feature=share",
    },
    {
      name: "Emily Willson",
      role: "Landscape Designer",
      video: "https://youtube.com/shorts/6Vwf8EYdjK8?feature=share",
    },
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmt = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmt, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full max-w-7xl mx-auto px-4 sm:px-6">
      {/* TITLE */}
      <motion.h2
        className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-8 sm:mb-10 md:mb-14 px-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Success Stories <br /> from Workshop
      </motion.h2>

      {/* CONTAINER WITH SCROLL */}
      <div className="relative">
        {/* LEFT BUTTON - Hidden on mobile, visible on md+ */}
        <motion.button
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
                     bg-white shadow-lg p-3 rounded-full z-20
                     hover:bg-gray-50 cursor-pointer items-center justify-center"
          aria-label="Scroll left"
        >
          <FiChevronLeft size={24} />
        </motion.button>

        {/* RIGHT BUTTON - Hidden on mobile, visible on md+ */}
        <motion.button
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
                     bg-white shadow-lg p-3 rounded-full z-20
                     hover:bg-gray-50 cursor-pointer items-center justify-center"
          aria-label="Scroll right"
        >
          <FiChevronRight size={24} />
        </motion.button>

        {/* CARDS CONTAINER */}
        <motion.div
          ref={scrollRef}
          className="flex items-center gap-4 sm:gap-6 md:gap-8 
                     overflow-x-auto md:overflow-x-visible
                     scrollbar-hide scroll-smooth
                     snap-x snap-mandatory
                     md:flex-wrap md:justify-center
                     pb-4 md:pb-0"
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
              className="relative 
                         min-w-[240px] sm:min-w-[260px] md:min-w-0 md:w-64
                         h-[380px] sm:h-[400px] md:h-[420px]
                         rounded-xl md:rounded-2xl 
                         overflow-hidden shadow-lg bg-gray-900 group
                         snap-center flex-shrink-0"
            >
              {/* VIDEO */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                muted
                loop
                preload="auto"
                playsInline
                autoPlay={false}
                className="absolute inset-0 w-full h-full object-cover"
                onLoadedData={(e) => {
                  e.target.currentTime = 0;
                }}
                onError={() => console.log("Video failed:", item.video)}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition"></div>

              {/* TEXT */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 text-white z-10">
                <p className="font-semibold text-sm sm:text-[15px]">{item.name}</p>
                <p className="text-xs sm:text-sm opacity-80">{item.role}</p>
              </div>

              {/* PLAY BUTTON */}
              <motion.button
                onClick={() => handlePlayPause(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 
                           w-9 h-9 sm:w-10 sm:h-10 
                           rounded-lg bg-black bg-opacity-40 
                           flex items-center justify-center backdrop-blur-sm 
                           hover:bg-opacity-60 transition z-10
                           active:bg-opacity-70"
                aria-label={activeIndex === index ? "Pause video" : "Play video"}
              >
                {activeIndex === index ? (
                  <span className="text-white text-base sm:text-lg">⏸</span>
                ) : (
                  <span className="text-white text-base sm:text-lg">▶</span>
                )}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile scroll indicator dots */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
          {stories.map((_, idx) => (
            <div
              key={idx}
              className="w-2 h-2 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Optional: Scroll hint text for mobile */}
      <p className="md:hidden text-center text-xs text-gray-400 mt-4">
        Swipe to see more →
      </p>
    </section>
  );
}