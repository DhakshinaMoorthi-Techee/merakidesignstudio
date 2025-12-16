import { GoLightBulb } from "react-icons/go";
import { LuHandshake, LuShapes } from "react-icons/lu";
import { PiHandFist, PiPlant } from "react-icons/pi";
import { RiBookShelfLine } from "react-icons/ri";

export default function WhyChooseUs() {
  const featuresTop = [
    {
      icon: <PiHandFist />,
      title: "Hands-on Learning",
      desc: "Every session is built around practice, not just lectures. You'll design, experiment, and build confidence through real projects.",
    },
    {
      icon: <LuShapes />,
      title: "Expert Mentorship",
      desc: "Our instructors are practicing designers and landscape professionals who bring practical insights, not just textbook knowledge.",
    },
    {
      icon: <RiBookShelfLine />,
      title: "Comprehensive Curriculum",
      desc: "From plant science and spatial design to software mastery — AutoCAD, SketchUp, Lumion, Photoshop, QGIS — we cover every essential skill.",
    },
  ];

  const featuresBottom = [
    {
      icon: <GoLightBulb />,
      title: "Creative Environment",
      desc: "We encourage exploration, discussion, and collaboration. Every idea is valued, every voice heard.",
    },
    {
      icon: <LuHandshake />,
      title: "Focus on Sustainability",
      desc: "Our workshops emphasize designing with nature, not against it — teaching methods that balance aesthetics with environmental responsibility.",
    },
    {
      icon: <PiPlant />,
      title: "Career Growth",
      desc: "Whether you're a student, architect, or enthusiast, our programs equip you with skills and a portfolio that stand out in the design world.",
    },
  ];

  return (
    <section className="w-7xl bg-white pt-20 pb-16 m-auto">
      {/* ---- Heading ---- */}
      <div className="text-center mb-16">
        <h4 className="text-[#1F7F4C] text-lg font-medium tracking-wide">
          Why Meraki?
        </h4>

        <h2 className="mt-2 text-[32px] md:text-[36px] font-semibold text-[#111]">
          Why you should choose us
        </h2>
      </div>

      {/* ---- Features Grid ---- */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 relative">
          {featuresTop.map((item, index) => (
            <div key={index} className="relative px-4 md:px-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1F7F4C] flex items-center justify-center text-white text-xl shrink-0">
                  {item.icon}
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-[17px] text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              {index < 2 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gray-200 my-14"></div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 relative">
          {featuresBottom.map((item, index) => (
            <div key={index} className="relative px-4 md:px-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1F7F4C] flex items-center justify-center text-white text-xl shrink-0">
                  {item.icon}
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-[17px] text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              {index < 2 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---- Curriculum Section ---- */}
      <div className="mt-24 text-center">
        <h4 className="text-[#1F7F4C] text-xl font-medium">Curriculum</h4>

        <h2 className="mt-2 text-[32px] md:text-[36px] font-semibold text-[#111]">
          What you’ll learn in this <br /> Workshop
        </h2>

        <button className="mt-6 bg-[#1F7F4C] text-white px-6 py-2 rounded-md hover:bg-[#166b3f] transition">
          Register Now
        </button>
      </div>
    </section>
  );
}
