import { useRef } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Afeefa Abbas MV",
    role: "Agricultural Engineer",
    img: "https://i.pravatar.cc/100?img=1",
    text: "I recently completed a 6-week workshop on Landscape Designing from Meraki Design Studio. The program helped me gain valuable knowledge in AutoCAD, SketchUp, Lumion and design detailing."
  },
  {
    id: 2,
    name: "Clara Jamson",
    role: "BSc(Horticulture)",
    img: "https://i.pravatar.cc/100?img=2",
    text: "I had a wonderful experience with Meraki Design Studio. Their lessons covered everything from basics to advanced levels, making landscape design easy to learn."
  },
  {
    id: 3,
    name: "Manish Kumar",
    role: "Landscape Designer",
    img: "https://i.pravatar.cc/100?img=3",
    text: "The workshop boosted my design confidence. Practical sessions and software training were the best part."
  },
  {
    id: 4,
    name: "Sana Rahman",
    role: "Architect",
    img: "https://i.pravatar.cc/100?img=4",
    text: "Amazing team, amazing training! I learned how to convert ideas into real landscape concepts."
  },
  {
    id: 5,
    name: "John Mathew",
    role: "Civil Engineer",
    img: "https://i.pravatar.cc/100?img=5",
    text: "Very detailed and well-structured. Highly recommended for beginners and professionals."
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmt = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmt, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full px-6 md:px-16 py-12">
      {/* Header */}
      <h3 className="text-center text-green-700 font-medium">Testimonials</h3>
      <h2 className="text-center text-3xl font-bold mt-1">
        What Our Students Says
      </h2>

      {/* Batch Dropdown */}
      <div className="flex justify-center mt-6">
        <select className="border rounded-md px-4 py-2 text-sm">
          <option>All Batch</option>
          <option>Batch 1</option>
          <option>Batch 2</option>
          <option>Batch 3</option>
        </select>
      </div>

      {/* Scroll Buttons */}
      <div className="relative mt-10">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
        >
          <FiChevronLeft size={22} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
        >
          <FiChevronRight size={22} />
        </button>

        {/* Cards Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-10 py-4"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-[380px] bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Profile */}
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={t.name}
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Text */}
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                {t.text}
              </p>

              {/* Icons */}
              <div className="flex gap-4 mt-4 text-gray-600">
                <FaLinkedin className="cursor-pointer hover:text-green-700" />
                <FaInstagram className="cursor-pointer hover:text-green-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More */}
      <div className="text-center mt-6">
        <button className="text-green-700 font-medium hover:underline">
          See More
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
