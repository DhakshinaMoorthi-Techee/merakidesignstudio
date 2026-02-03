import { useRef, useState } from "react";
import { cardAnim, fadeUp, stagger } from "../data/animations";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";

export default function SuccessStories() {
  const scrollRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const stories = [
    {
      name: "Keerthi Vasan",
      role: "Landscape Designer",
      videoId: "6Vwf8EYdjK8",
      thumbnail: "https://img.youtube.com/vi/6Vwf8EYdjK8/maxresdefault.jpg",
    },
    {
      name: "Leslie Alexander",
      role: "Landscape Designer",
      videoId: "RtHZLcE7Aco",
      thumbnail: "https://img.youtube.com/vi/RtHZLcE7Aco/maxresdefault.jpg",
    },
    {
      name: "Courtney Henry",
      role: "Landscape Designer",
      videoId: "mZQriw3UtyY",
      thumbnail: "https://img.youtube.com/vi/mZQriw3UtyY/maxresdefault.jpg",
    },
    {
      name: "Emily Willson",
      role: "Landscape Designer",
      videoId: "XI5Sd3QX-vw",
      thumbnail: "https://img.youtube.com/vi/XI5Sd3QX-vw/maxresdefault.jpg",
    },
    {
      name: "Emily Willson",
      role: "Landscape Designer",
      videoId: "8Ta_tVThA-Y",
      thumbnail: "https://img.youtube.com/vi/8Ta_tVThA-Y/maxresdefault.jpg",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmt = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmt, behavior: "smooth" });
    }
  };

  const handlePlayVideo = (index) => {
    setPlayingVideo(index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
          {/* LEFT BUTTON */}
          <motion.button
            onClick={() => scroll("left")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
                       bg-white shadow-lg p-3 rounded-full z-20
                       hover:bg-gray-50 cursor-pointer items-center justify-center"
            aria-label="Scroll left"
          >
            <FiChevronLeft size={24} />
          </motion.button>

          {/* RIGHT BUTTON */}
          <motion.button
            onClick={() => scroll("right")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
                       bg-white shadow-lg p-3 rounded-full z-20
                       hover:bg-gray-50 cursor-pointer items-center justify-center"
            aria-label="Scroll right"
          >
            <FiChevronRight size={24} />
          </motion.button>

          {/* HORIZONTAL SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden
                       scrollbar-hide scroll-smooth snap-x snap-mandatory
                       pb-4 px-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {stories.map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
                className="relative flex-shrink-0
                           w-[240px] sm:w-[280px] md:w-[300px]
                           h-[380px] sm:h-[440px] md:h-[480px]
                           rounded-xl md:rounded-2xl 
                           overflow-hidden shadow-lg bg-gray-900 group
                           snap-center"
              >
                {playingVideo === index ? (
                  // VIDEO PLAYER
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=0&controls=0&rel=0`}
                    title={`${item.name} story`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  // THUMBNAIL VIEW
                  <>
                    {/* Thumbnail Image */}
                    <img
                      src={item.thumbnail}
                      alt={`${item.name} video thumbnail`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Play Button */}
                    <motion.button
                      onClick={() => handlePlayVideo(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                 bg-white/30 hover:bg-white/60 rounded-full p-5 sm:p-6
                                 shadow-2xl transition-all duration-300
                                 group-hover:bg-white/60 group-hover:shadow-xl z-10"
                      aria-label={`Play ${item.name}'s video`}
                    >
                      <FiPlay className="text-gray-300 w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                    </motion.button>
                  </>
                )}

                {/* TEXT - Always visible */}
                {/* <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 text-white z-10 text-left">
                  <p className="font-semibold text-lg sm:text-base">{item.name}</p>
                  <p className="text-xs sm:text-sm opacity-80">{item.role}</p>
                </div> */}
              </motion.div>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <p className="lg:hidden text-center text-xs text-gray-400 mt-4">
            Swipe to see more →
          </p>
        </div>
      </div>
    </section>
  );
}