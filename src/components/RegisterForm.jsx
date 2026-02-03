import { useState } from "react";
import { fadeUp } from "../data/animations";
import { motion } from "framer-motion";

export default function RegisterForm() {
  const [activeTab, setActiveTab] = useState("demo");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    if (status.type) {
      setStatus({ type: "", message: "" });
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formValues.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!formValues.lastName.trim()) nextErrors.lastName = "Last name is required.";

    if (!formValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (!formValues.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (formValues.phone.replace(/\D/g, "").length < 7) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formValues.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = new URLSearchParams({
        "form-name": "register",
        botField: "",
        registrationType: activeTab,
        ...formValues,
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setStatus({ type: "success", message: "Thanks! We received your registration." });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          className={`flex-1 text-xs sm:text-sm font-medium py-2 sm:py-2.5 rounded-full transition cursor-pointer ${activeTab === "demo"
              ? "bg-green-900 text-white shadow"
              : "text-gray-600"
            }`}
        >
          Demo Registration
        </button>

        <button
          onClick={() => setActiveTab("course")}
          className={`flex-1 text-xs sm:text-sm font-medium py-2 sm:py-2.5 rounded-full transition cursor-pointer ${activeTab === "course"
              ? "bg-green-900 text-white shadow"
              : "text-gray-600"
            }`}
        >
          Course Registration
        </button>
      </motion.div>

      {/* Form */}
      <motion.form
        name="register"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-5 md:space-y-6"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {/* Netlify required hidden input */}
        <input type="hidden" name="form-name" value="register" />
        {/* Honeypot field (hidden from users) */}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="registrationType" value={activeTab} />

        {/* Name */}
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="flex flex-col items-start">
            <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
              First name
            </label>
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              required
              value={formValues.firstName}
              onChange={handleChange}
              className="w-full h-[42px] sm:h-[46px] rounded-lg border border-gray-300 px-3 sm:px-4 text-xs sm:text-sm
         text-gray-900 placeholder:text-gray-400
         focus:outline-none focus:ring-1 focus:ring-green-900/30"
            />
            {errors.firstName ? (
              <span className="text-xs text-red-600 mt-1">{errors.firstName}</span>
            ) : null}
          </div>

          <div className="flex flex-col items-start">
            <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Last name
            </label>
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              required
              value={formValues.lastName}
              onChange={handleChange}
              className="w-full h-[42px] sm:h-[46px] rounded-lg border border-gray-300 px-3 sm:px-4 text-xs sm:text-sm
         text-gray-900 placeholder:text-gray-400
         focus:outline-none focus:ring-1 focus:ring-green-900/30"
            />
            {errors.lastName ? (
              <span className="text-xs text-red-600 mt-1">{errors.lastName}</span>
            ) : null}
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeUp} className="flex flex-col items-start">
          <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            value={formValues.email}
            onChange={handleChange}
            className="w-full h-[42px] sm:h-[46px] rounded-lg border border-gray-300 px-3 sm:px-4 text-xs sm:text-sm
       text-gray-900 placeholder:text-gray-400
       focus:outline-none focus:ring-1 focus:ring-green-900/30"
          />
          {errors.email ? (
            <span className="text-xs text-red-600 mt-1">{errors.email}</span>
          ) : null}
        </motion.div>

        {/* Phone */}
        <motion.div variants={fadeUp} className="flex flex-col items-start">
          <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="IN  +91 000-0000"
            required
            value={formValues.phone}
            onChange={handleChange}
            className="w-full h-[42px] sm:h-[46px] rounded-lg border border-gray-300 px-3 sm:px-4 text-xs sm:text-sm
       text-gray-900 placeholder:text-gray-400
       focus:outline-none focus:ring-1 focus:ring-green-900/30"
          />
          {errors.phone ? (
            <span className="text-xs text-red-600 mt-1">{errors.phone}</span>
          ) : null}
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeUp} className="flex flex-col items-start">
          <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about yourself..."
            required
            value={formValues.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm
       text-gray-900 placeholder:text-gray-400
       focus:outline-none focus:ring-1 focus:ring-green-900/30 resize-none"
          />
          {errors.message ? (
            <span className="text-xs text-red-600 mt-1">{errors.message}</span>
          ) : null}
        </motion.div>

        {status.message ? (
          <motion.div
            variants={fadeUp}
            className={`rounded-lg px-3 py-2 text-xs sm:text-sm ${
              status.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {status.message}
          </motion.div>
        ) : null}

        {/* Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={isSubmitting}
          className="w-full rounded-lg bg-green-900 text-white py-2.5 sm:py-3
               text-xs sm:text-sm font-medium hover:bg-green-800 transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </motion.button>
      </motion.form>

    </motion.div>
  );
}
