import { LuArrowUpRight, LuClock4, LuGraduationCap } from "react-icons/lu";

export default function ProgramCard({ data, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full cursor-pointer"
    >
      <div className="rounded-xl overflow-hidden mb-4">
        <img
          src={data.image}
          alt={data.title}
          className="h-60 w-full object-cover transition group-hover:scale-105"
        />
      </div>

      <p className="text-sm text-green-800 font-medium mb-1">
        {data.week}
      </p>

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {data.title}
        </h3>
        <LuArrowUpRight
          size={18}
          className="mt-1 text-gray-400 group-hover:text-gray-900"
        />
      </div>

      <div className="flex gap-4 mt-3 text-sm text-gray-700">
        <span className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <LuGraduationCap size={16} /> {data.topics} Topics
        </span>
        <span className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <LuClock4 size={16}/> {data.hours} Hours
        </span>
      </div>
    </button>
  );
}
