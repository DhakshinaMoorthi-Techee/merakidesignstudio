import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

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
  }
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
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 leading-snug">
        People just like you who had joined <br />
        <span className="text-green-700">Workshop</span> and changed their life
      </h2>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-left">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-lg w-full h-64 object-cover mb-4 shadow-sm"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-green-700 text-sm">{member.role}</p>
            <p className="text-sm text-gray-600">{member.company}</p>

            <IconBar />
          </div>
        ))}
      </div>

      <button className="mt-12 text-green-700 underline text-sm hover:text-green-900">
        See More
      </button>
    </div>
  );
}
