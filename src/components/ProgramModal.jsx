import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function ProgramModal({ data, onClose }) {
  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm 
                   flex items-end sm:items-center justify-center 
                   px-0 sm:px-4 overflow-y-auto"
      >
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white 
                     rounded-t-3xl sm:rounded-2xl 
                     w-full sm:max-w-xl md:max-w-2xl
                     max-h-[90vh] sm:max-h-[85vh]
                     overflow-y-auto
                     relative
                     shadow-2xl"
        >
          {/* Content Container */}
          <div className="p-5 sm:p-6 md:p-8">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5
                         text-gray-400 hover:text-gray-900 
                         bg-gray-100 hover:bg-gray-200
                         rounded-full p-2
                         transition-all duration-200
                         cursor-pointer z-10"
              aria-label="Close modal"
            >
              <IoClose size={20} className="sm:w-5 sm:h-5" />
            </button>

            {/* Week Badge */}
            <div className="mb-2">
              <span className="inline-block text-xs sm:text-sm 
                             bg-green-100 text-green-800 
                             font-medium px-3 py-1 rounded-full">
                {data.week}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl 
                          font-semibold text-gray-900 
                          mb-4 sm:mb-6 
                          pr-8 sm:pr-0
                          leading-tight">
              {data.title}
            </h3>

            {/* Description */}
            <div
              className="text-sm sm:text-base text-gray-600 
                         leading-relaxed text-left space-y-3 sm:space-y-4
                         [&_h4]:text-sm [&_h4]:sm:text-base [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mb-2
                         [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:sm:pl-5 [&_ul]:space-y-1.5
                         [&_li]:mb-1 [&_li]:text-sm [&_li]:sm:text-base
                         [&_p]:mb-2 [&_p]:sm:mb-3"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="sm:hidden flex justify-center pt-2 pb-4">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}