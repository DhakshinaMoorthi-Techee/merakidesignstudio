import { useEffect, useState } from "react";
import { HiPause, HiPlay } from "react-icons/hi";

export default function YouTubeCustomPlayer() {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState("English");

  // YouTube Player State Change
  const onPlayerStateChange = (event) => {
    setIsPlaying(event.data === 1);
  };

  // Load YouTube API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player("yt-player", {
        events: { onStateChange: onPlayerStateChange },
      });
      setPlayer(ytPlayer);
    };
  }, []);

  // Play / Pause Toggle
  const togglePlay = () => {
    if (!player) return;
    isPlaying ? player.pauseVideo() : player.playVideo();
  };

  // Progress Updater
  useEffect(() => {
    let interval = null;
    if (player) {
      interval = setInterval(() => {
        const cur = player.getCurrentTime();
        const total = player.getDuration();
        if (total > 0) setProgress((cur / total) * 100);
      }, 400);
    }
    return () => clearInterval(interval);
  }, [player]);

  return (
    <div className="w-7xl max-w-5xl m-auto mt-10 mb-16 px-4">
      {/* LANGUAGE SWITCHER */}
      <div className="text-center my-8">
        <p className="text-gray-700 mb-2 text-sm md:text-base">
          Select Language:
        </p>

        <div className="inline-flex items-center bg-gray-100 rounded-full px-2 py-1 gap-2">
          <button
            onClick={() => setLanguage("English")}
            className={`px-4 py-1 rounded-full text-sm md:text-base transition-all ${
              language === "English"
                ? "bg-[#0C3B2E] text-white"
                : "text-gray-700 bg-transparent"
            }`}
          >
            English
          </button>

          <button
            onClick={() => setLanguage("Tamil")}
            className={`px-4 py-1 rounded-full text-sm md:text-base transition-all ${
              language === "Tamil"
                ? "bg-[#0C3B2E] text-white"
                : "text-gray-700 bg-transparent"
            }`}
          >
            Tamil
          </button>
        </div>
      </div>

      {/* RESPONSIVE VIDEO WRAPPER (16:9 RATIO) */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
        <div className="relative w-full pb-[56.25%]"> {/* maintains 16:9 ratio */}
          <iframe
            id="yt-player"
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/OBt4Tw6nCvc?start=300&controls=0&modestbranding=1&rel=0&enablejsapi=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* CENTER PLAY/PAUSE BUTTON */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center 
                          h-20 w-20 md:h-32 md:w-32 text-white">
            {isPlaying ? (
              <HiPause className="text-4xl md:text-6xl" />
            ) : (
              <HiPlay className="text-4xl md:text-6xl ml-1" />
            )}
          </div>
        </button>

        {/* BOTTOM VIDEO CONTROLS */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 md:gap-4">
          <button onClick={togglePlay} className="text-white text-2xl md:text-3xl">
            {isPlaying ? <HiPause /> : <HiPlay className="ml-1" />}
          </button>

          {/* PROGRESS BAR */}
          <div className="flex-1 h-2 md:h-3 bg-white/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
