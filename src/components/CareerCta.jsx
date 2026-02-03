import RegisterForm from "./RegisterForm";
import CareerCover from "../assets/images/career-cover.jpg";
import { fadeLeft, fadeRight, fadeUp, stagger } from "../data/animations";
import { motion } from "framer-motion";

export default function CareerCta() {
  return (
    <section id='contact' className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-10 sm:mb-12 md:mb-14 px-4 leading-tight"
      >
        Let's Scale Up Your Creative <br className="hidden sm:block" /> Career
      </motion.h2>

      {/* Content */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Left Form */}
        <motion.div variants={fadeLeft} className="order-2 md:order-1">
          <RegisterForm />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeRight} className="space-y-5 sm:space-y-6 order-1 md:order-2">
          {/* Image */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
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
            className="border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-5 text-left"
          >
            <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">
              Join Our Community
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
              Connect with us on WhatsApp for workshop updates and
              sustainability tips.
            </p>

            <motion.a
              href="https://chat.whatsapp.com/KijnvK8Y5BeF0DMKWKQKyX"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center w-full rounded-lg
                     border border-green-800 text-green-800 py-2.5 sm:py-3 font-medium text-sm sm:text-base
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