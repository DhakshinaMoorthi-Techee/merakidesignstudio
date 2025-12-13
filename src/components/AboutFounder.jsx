export default function AboutFounder() {
  return (
    <section className="w-7xl bg-white py-14 px-6 m-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        
        {/* LEFT TEXT SECTION */}
        <div className="text-gray-800 text-left">
          {/* Quote Icon */}
          <div className="text-[#1F7F4C] text-4xl mb-4">❝</div>

          <h2 className="text-[22px] font-semibold text-gray-900 mb-6">
            ABOUT THE FOUNDER
          </h2>

          <p className="text-[15px] leading-relaxed text-gray-700 mb-5">
            I am A. Dhanapriya, the founder of Meraki Design Studio—a space where 
            creativity, nature, and technical excellence come together to craft 
            meaningful landscape experiences.
          </p>

          <p className="text-[15px] leading-relaxed text-gray-700">
            My journey began with a Bachelor of Science in Agriculture, which gave 
            me a strong foundation in plant science, soil behavior, irrigation systems, 
            and environmental management. With this scientific knowledge and a deep 
            passion for outdoor spaces, I entered the world of landscape design, where 
            I have spent the last five years designing, managing, and delivering 
            landscape projects across Kerala, Tamil Nadu, UAE and Karnataka.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center">
          <div className="relative w-[360px] h-[480px] rounded-2xl overflow-hidden shadow-md">
            <img
              src="/src/assets/images/Founder-image.jpg"
              alt="Founder"
              className="w-full h-full object-cover scale-200"
            />

            {/* Bottom Black Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Name & Role */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-[15px] font-semibold text-left">DHANA PRIYA. A</p>
              <p className="text-[13px] opacity-70">
                Landscape Designer & Project Coordinator
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
