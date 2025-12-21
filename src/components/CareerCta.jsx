import RegisterForm from "./RegisterForm";
import CareerCover from "../assets/images/career-cover.jpg";
import { fadeLeft, fadeRight, fadeUp, stagger } from "../data/animations";
import { motion } from "framer-motion";

export default function CareerCta() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14"
      >
        Let's Scale Up Your Creative <br /> Career
      </motion.h2>

      {/* Content */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-start"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Left Form */}
        <motion.div variants={fadeLeft}>
          <RegisterForm />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeRight} className="space-y-6">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden h-[550px]">
            <motion.img
              src={CareerCover}
              alt="Landscape design work"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            variants={fadeUp}
            className="border border-gray-200 rounded-xl p-4 text-left"
          >
            <h3 className="font-semibold text-gray-900 mb-2">
              Join Our Community
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Connect with us on WhatsApp for workshop updates and
              sustainability tips.
            </p>

            <motion.a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex justify-center w-full rounded-lg
                     border border-green-800 text-green-800 py-3 font-medium
                     hover:bg-green-800 hover:text-white transition"
            >
              Join WhatsApp Group
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
