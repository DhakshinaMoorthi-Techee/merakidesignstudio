import {
  FaVideo,
  FaHandHolding,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

export default function WorkshopSection() {
  return (
    <section className="py-20 bg-white w-7xl m-auto">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
        The only Workshop you need to be <br />
        <span className="text-green-700">among top 1% Designers</span>
      </h2>

      {/* Top Cards */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
        {/* Card */}
        <div className="w-full md:w-1/3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] rounded-2xl p-8 border border-gray-100">
          <FaVideo className="text-green-600 text-3xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Online Learning
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Engage in interactive, real-time sessions led by industry experts,
            ensuring in-depth understanding and instant feedback.
          </p>
        </div>

        {/* Card */}
        <div className="w-full md:w-1/3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] rounded-2xl p-8 border border-gray-100">
          <FaHandHolding className="text-green-600 text-3xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Hands-on Projects
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Apply your skills to real-world scenarios with practical assignments
            designed to enhance learning and portfolio building.
          </p>
        </div>

        {/* Card */}
        <div className="w-full md:w-1/3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] rounded-2xl p-8 border border-gray-100">
          <FaUserTie className="text-green-600 text-3xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Dedicated Mentorship
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Receive personalized guidance and support from experienced mentors
            to help achieve your learning goals.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 max-w-6xl mx-auto bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] rounded-3xl p-10 border border-gray-100 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-[25%] flex justify-center">
          <div className="rounded-[28px] overflow-hidden bg-white p-3 shadow-sm border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80"
              className="w-[260px] h-[360px] object-cover rounded-[20px]"
              alt="Workshop"
            />
          </div>
        </div>

        {/* Right Text List */}
        <div className="w-full md:w-[75%]">
          <ul className="space-y-4 text-gray-800 text-[15px] leading-relaxed text-left">
            {[
              "Understand the fundamentals of landscape and garden design, from concept to execution.",
              "Learn plant selection and composition to create functional, aesthetic outdoor spaces.",
              "Gain practical experience with AutoCAD, SketchUp, Lumion, Photoshop, and QGIS for design visualization.",
              "Master 3D modeling, rendering, and site planning for real-world landscape projects.",
              "Explore sustainable design principles — water management, lighting, and eco-materials.",
              "Work on hands-on projects guided by industry mentors and experts.",
              "Develop a strong design portfolio that reflects your creativity and practical skills.",
            ].map((text, i) => (
              <li key={i} className="flex gap-3 items-start">
                <FaCheckCircle className="text-green-600 text-lg mt-1" />
                {text}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 transition">
              Register Now
            </button>

            <button className="px-6 py-3 border border-gray-400 rounded-lg text-sm font-medium hover:bg-gray-50 transition flex items-center gap-2">
              Weekly Syllabus →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
