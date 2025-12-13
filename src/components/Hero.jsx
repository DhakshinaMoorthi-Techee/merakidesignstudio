export default function Hero() {
  return (
    <section className="pt-32 px-8 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Text */}
      <div>
        <p className="text-sm text-gray-600">
          Next Batch Starts December 15,{" "}
          <span className="text-green-700 font-semibold cursor-pointer">
            Register Now
          </span>
        </p>

        <h1 className="text-5xl font-bold leading-tight mt-3">
          Master the art of <br />
          <span className="text-green-700">Landscape Design</span>
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-green-600 italic">
          7 Weeks Training Workshop
        </h2>

        <div className="flex gap-4 mt-8">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
            Register Now
          </button>
          <button className="border border-gray-400 px-6 py-3 rounded-lg hover:border-green-600">
            Weekly Syllabus →
          </button>
        </div>

        <div className="flex gap-8 mt-8">
          <div className="flex items-center gap-2">
            <span>📍</span> Online
          </div>
          <div className="flex items-center gap-2">
            <span>⚒️</span> Hand-On
          </div>
          <div className="flex items-center gap-2">
            <span>🎓</span> Certificate
          </div>
        </div>
      </div>

      {/* Right Images */}
      <div className="flex gap-4">
        <img
          src="/hero1.jpg"
          className="rounded-lg h-80 object-cover"
        />
        <img
          src="/hero2.jpg"
          className="rounded-lg h-80 object-cover"
        />
      </div>

    </section>
  );
}
