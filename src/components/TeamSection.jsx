import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { fadeUp, stagger } from "../data/animations";
import { motion } from "framer-motion";
import { TeamMembers } from "../data/students";

export default function TeamSection() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-16 text-center mx-auto">
      {/* HEADING */}
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-10 md:mb-12 leading-snug px-2"
        variants={fadeUp}
        // initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        People just like you who had joined <br className="hidden sm:block" />
        <span className="text-green-700">Workshop</span> and changed their life
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 
                   grid-cols-1 
                   xs:grid-cols-2 
                   md:grid-cols-3 
                   lg:grid-cols-4"
        variants={stagger}
        // initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {TeamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="text-left transition-shadow duration-300 rounded-lg group"
          >
            {/* Image Container */}
            <div className="overflow-hidden rounded-lg mb-3 sm:mb-4 aspect-[3/4] relative">
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            {/* Member Info */}
            <div className="px-1">
              <h3 className="text-base sm:text-lg font-semibold truncate">
                {member.name}
              </h3>
              <p className="text-green-700 text-xs sm:text-sm truncate">
                {member.degree}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 truncate">
                {member.company}
              </p>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-3 text-gray-400">
                <a 
                  target="_blank" 
                  href={member.linkedin}
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <FaLinkedin
                    size={18}
                    className="sm:w-5 sm:h-5 cursor-pointer hover:text-green-700 transition"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SEE MORE */}
      {/* <motion.button
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 sm:mt-10 md:mt-12 text-green-700 underline text-sm hover:text-green-900 cursor-pointer"
      >
        See More
      </motion.button> */}
    </div>
  );
}