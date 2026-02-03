import { useState } from "react";
import { fadeUp } from "../data/animations";
import { motion } from "framer-motion";

export default function RegisterForm() {
  const [activeTab, setActiveTab] = useState("demo");

  return (
    <motion.div
      id="register"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8 w-full max-w-md mx-auto"
    >
      {/* Header */}
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3 text-left">
        Register Now
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10 md:mb-12 text-left">
        Our friendly team would love to hear from you.
      </p>

      {/* Tabs Container */}
      <motion.div className="bg-gray-100 rounded-full p-1 flex mb-6 sm:mb-8" layout>
        <button
          onClick={() => setActiveTab("demo")}
          className={`flex-1 text-xs sm:text-sm font-medium py-2 sm:py-2.5 rounded-full transition cursor-pointer ${
            activeTab === "demo"
              ? "bg-green-900 text-white shadow"
              : "text-gray-600"
          }`}
        >
          Demo Registration
        </button>

        <button
          onClick={() => setActiveTab("course")}
          className={`flex-1 text-xs sm:text-sm font-medium py-2 sm:py-2.5 rounded-full transition cursor-pointer ${
            activeTab === "course"
              ? "bg-green-900 text-white shadow"
              : "text-gray-600"
          }`}
        >
          Course Registration
        </button>
      </motion.div>

      {/* Form */}
      <motion.form
        className="space-y-4 sm:space-y-5 md:space-y-6"
        variants={{
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {/* Name */}
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="flex flex-col items-start">
            <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
              First name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="w-full h-[42px] sm:h-[46px] rounded-lg border border-gray-300 px-3 sm:px-4 text-xs sm:text-sm
             text-gray-900 placeholder:text-gray-400
             focus:outline-none focus:ring-1 focus:ring-green-900/30"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full h-[42px] sm:h-[46px] rounded-lg border border-gray-300 px-3 sm:px-4 text-xs sm:text-sm
             text-gray-900 placeholder:text-gray-400
             focus:outline-none focus:ring-1 focus:ring-green-900/30"
            />
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeUp} className="flex flex-col items-start">
          <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full h-[42px] sm:h-[46px] rounded-lg border border-gray-300 px-3 sm:px-4 text-xs sm:text-sm
             text-gray-900 placeholder:text-gray-400
             focus:outline-none focus:ring-1 focus:ring-green-900/30"
          />
        </motion.div>

        {/* Phone */}
        <motion.div variants={fadeUp} className="flex flex-col items-start">
          <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <input
            type="tel"
            placeholder="IN  +91 000-0000"
            className="w-full h-[42px] sm:h-[46px] rounded-lg border border-gray-300 px-3 sm:px-4 text-xs sm:text-sm
             text-gray-900 placeholder:text-gray-400
             focus:outline-none focus:ring-1 focus:ring-green-900/30"
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeUp} className="flex flex-col items-start">
          <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Tell us about yourself..."
            className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm
             text-gray-900 placeholder:text-gray-400
             focus:outline-none focus:ring-1 focus:ring-green-900/30 resize-none"
          />
        </motion.div>

        {/* Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full rounded-lg bg-green-900 text-white py-2.5 sm:py-3
                     text-xs sm:text-sm font-medium hover:bg-green-800 transition cursor-pointer"
        >
          Register
        </motion.button>
      </motion.form>
    </motion.div>
  );
}