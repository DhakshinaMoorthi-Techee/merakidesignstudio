import { IoClose } from "react-icons/io5";

export default function ProgramModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 cursor-pointer"
        >
          <IoClose size={20} />
        </button>

        <p className="text-sm text-green-800 font-medium mb-1">{data.week}</p>

        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {data.title}
        </h3>

        <div
          className="text-sm text-gray-600 leading-relaxed text-left space-y-3
             [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-gray-900
             [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
}
