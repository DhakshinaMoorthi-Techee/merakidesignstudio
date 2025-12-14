import Avatar1 from "../assets/images/avatar1.png";
import Avatar2 from "../assets/images/avatar2.png";
import Avatar3 from "../assets/images/avatar3.png";

export default function Questions() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-24">
      <div className="bg-gray-100 rounded-2xl py-8 px-6 text-center shadow-sm">
        {/* Avatars */}
        <div className="flex justify-center -space-x-3 mb-6">
          <img
            src={Avatar2}
            alt="Team member"
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
          <img
            src={Avatar1}
            alt="Team member"
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <img
            src={Avatar3}
            alt="Team member"
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
        </div>

        {/* Text */}
        <h3 className="text-2xl text-gray-900 mb-2">
          Still have questions?
        </h3>

        <p className="text-gray-400 mx-auto mb-8">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>

        {/* Button */}
        <button className="inline-flex items-center justify-center rounded-lg bg-green-800 px-6 py-3 text-sm font-medium text-white hover:bg-green-900 transition cursor-pointer">
          Get in touch
        </button>
      </div>
    </section>
  );
}
