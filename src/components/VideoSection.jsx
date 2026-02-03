import { useEffect, useRef, useState } from "react";
import { HiPlay, HiPause } from "react-icons/hi";
import { fadeUp, scaleIn } from "../data/animations";
import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";

export default function YouTubeCustomPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState("English");
  const playerRef = useRef(null);

  const videos = {
    English: {
      videoId: "qd5F_LrrxNQ",
      thumbnail: "https://img.youtube.com/vi/qd5F_LrrxNQ/maxresdefault.jpg",
    },
    Tamil: {
      videoId: "OBt4Tw6nCvc",
      thumbnail: "https://img.youtube.com/vi/OBt4Tw6nCvc/maxresdefault.jpg",
    },
  };

  const currentVideo = videos[language];

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  // Reset playing state when language changes
  useEffect(() => {
    setIsPlaying(false);
  }, [language]);

  return (
    <motion.div
      className="max-w-7xl mx-auto mt-10 mb-16 px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* LANGUAGE SWITCHER */}
      <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
        <p className="text-gray-900 mb-3 text-sm md:text-base font-medium">
          Select Language:
        </p>

        <div className="inline-flex items-center bg-gray-100 rounded-full p-1 gap-1">
          <button
            onClick={() => setLanguage("English")}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium
              transition-all duration-300 cursor-pointer
              ${
                language === "English"
                  ? "bg-[#0C3B2E] text-white shadow-sm"
                  : "text-gray-700 hover:text-gray-900"
              }`}
          >
            English
          </button>

          <button
            onClick={() => setLanguage("Tamil")}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium
              transition-all duration-300 cursor-pointer
              ${
                language === "Tamil"
                  ? "bg-[#0C3B2E] text-white shadow-sm"
                  : "text-gray-700 hover:text-gray-900"
              }`}
          >
            Tamil
          </button>
        </div>
      </motion.div>

      {/* VIDEO CONTAINER */}
      <motion.div
        variants={scaleIn}
        className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-900 group"
      >
        {/* 16:9 Aspect Ratio Container */}
        <div className="relative w-full pb-[56.25%]">
          {isPlaying ? (
            // VIDEO PLAYER
            <iframe
              ref={playerRef}
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&mute=0&controls=0&rel=0&modestbranding=1`}
              title={`${language} Workshop Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            // THUMBNAIL VIEW
            <>
              {/* Thumbnail Image */}
              <img
                src={currentVideo.thumbnail}
                alt={`${language} workshop video thumbnail`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Large Center Play Button */}
              <motion.button
                onClick={handlePlayVideo}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           bg-white/95 hover:bg-white rounded-full 
                           w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
                           shadow-2xl transition-all duration-300
                           group-hover:shadow-3xl z-10
                           flex items-center justify-center"
                aria-label="Play video"
              >
                <FiPlay className="text-gray-900 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 ml-1" />
              </motion.button>

              {/* Optional: Language Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                  <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                    {language} Version
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Optional: Video Description */}
      <motion.div
        variants={fadeUp}
        className="text-center mt-6 sm:mt-8"
      >
        <p className="text-gray-600 text-sm sm:text-base">
          Watch our workshop introduction in {language}
        </p>
      </motion.div>
    </motion.div>
  );
}