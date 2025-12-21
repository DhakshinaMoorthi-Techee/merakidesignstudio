import { motion } from "framer-motion";
import Avatar1 from "../assets/images/avatar1.png";
import Avatar2 from "../assets/images/avatar2.png";
import Avatar3 from "../assets/images/avatar3.png";
import { avatarStagger, fadeUpSoft, scaleFadeIn } from "../data/animations";

export default function Questions() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-24">
      <motion.div
        className="bg-gray-50 rounded-2xl py-8 px-6 text-center shadow-sm border border-gray-50"
        variants={scaleFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Avatars */}
        <motion.div
          className="flex justify-center -space-x-3 mb-6"
          variants={avatarStagger}
        >
          {[Avatar2, Avatar1, Avatar3].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="Team member"
              variants={fadeUpSoft}
              className={`rounded-full border-2 border-white object-cover
            ${i === 1 ? "w-12 h-12" : "w-10 h-10"}`}
            />
          ))}
        </motion.div>

        {/* Text */}
        <motion.h3 variants={fadeUpSoft} className="text-xl text-gray-900 mb-2">
          Still have questions?
        </motion.h3>

        <motion.p
          variants={fadeUpSoft}
          className="text-gray-500 mx-auto mb-8 text-md"
        >
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </motion.p>

        {/* Button */}
        <motion.button
          variants={fadeUpSoft}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center rounded-lg
                 bg-green-800 px-6 py-3 text-sm font-medium text-white
                 hover:bg-green-700 transition cursor-pointer"
        >
          Get in touch
        </motion.button>
      </motion.div>
    </section>
  );
}
