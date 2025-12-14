import RegisterForm from "./RegisterForm";
import CareerCover from "../assets/images/career-cover.jpg";

export default function CareerCta() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14">
        Let's Scale Up Your Creative <br /> Career
      </h2>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Form */}
        <RegisterForm />

        {/* Right Content */}
        <div className="space-y-6">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden max-h-sm">
            <img
              src={CareerCover}
              alt="Landscape design work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* WhatsApp CTA */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Join Our Community
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              Connect with us on WhatsApp for workshop updates and
              sustainability tips.
            </p>

            <a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              className="inline-flex justify-center w-full rounded-lg border border-green-800 text-green-800 py-3 font-medium hover:bg-green-50 transition"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
