import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { fadeUp, stagger } from "../data/animations";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Olivia Rhye",
    role: "Landscape Designer",
    company: "At ABC Company",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Phoenix Baker",
    role: "Landscape Designer",
    company: "At ABC Company",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Lana Steiner",
    role: "Landscape Designer",
    company: "At ABC Company",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    name: "Demi Wilkinson",
    role: "Landscape Designer",
    company: "At ABC Company",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    name: "Candice Wu",
    role: "Landscape Designer",
    company: "At ABC Company",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    name: "Natali Craig",
    role: "Landscape Designer",
    company: "At ABC Company",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    name: "Drew Cano",
    role: "Landscape Designer",
    company: "At ABC Company",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Orlando Diggs",
    role: "Landscape Designer",
    company: "At ABC Company",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

const IconBar = () => (
  <div className="flex gap-4 mt-3 text-gray-400">
    <FaLinkedin
      size={20}
      className="cursor-pointer hover:text-green-700 transition"
    />
    <FaInstagram
      size={20}
      className="cursor-pointer hover:text-green-700 transition"
    />
  </div>
);

export default function TeamSection() {
  return (
    <div className="w-7xl px-6 md:px-20 py-16 text-center m-auto">
      {/* HEADING */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-12 leading-snug"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        People just like you who had joined <br />
        <span className="text-green-700">Workshop</span> and changed their life
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="text-left transition-shadow duration-300 rounded-lg"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-green-700 text-sm">{member.role}</p>
            <p className="text-sm text-gray-600">{member.company}</p>

            <IconBar />
          </motion.div>
        ))}
      </motion.div>

      {/* SEE MORE */}
      <motion.button
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 text-green-700 underline text-sm hover:text-green-900 cursor-pointer"
      >
        See More
      </motion.button>
    </div>
  );
}
