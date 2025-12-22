import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, stagger } from "../data/animations";
import { LuArrowRight, LuBadgeCheck } from "react-icons/lu";
import { HiOutlineVideoCamera, HiOutlineTrophy } from "react-icons/hi2";

import Banner1 from "../assets/images/banner1.png";
import Banner2 from "../assets/images/banner2.png";
import BannerAvatar1 from "../assets/images/banneravatar1.jpg";
import BannerAvatar2 from "../assets/images/banneravatar2.jpg";
import BannerAvatar3 from "../assets/images/banneravatar3.jpg";
import BannerAvatar4 from "../assets/images/banneravatar4.jpg";

export default function Hero() {
  return (
    <section className="max-w-7xl relative mx-auto px-9 pt-45 pb-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center text-left">
        {/* LEFT CONTENT */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-sm text-gray-800 mb-4">
            Next Batch Starts December 15,{" "}
            <span
              className="text-green-800 font-medium underline cursor-pointer"
              onClick={() =>
                document
                  .getElementById("career")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register Now
            </span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[60px] leading-[1.1] font-semibold text-gray-900"
          >
            Master the art of <br />
            Landscape Design
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-1 text-[58px] font-bold text-green-800 italic"
            style={{ fontFamily: "Caveat" }}
          >
            8 Weeks Training Workshop
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex gap-4 mt-5">
            <button
              className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 hover:border-green-900 border transition"
              onClick={() =>
                document
                  .getElementById("career")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register Now
            </button>

            <button
              className="group flex items-center gap-2 border px-6 py-3 rounded-lg"
              onClick={() =>
                document
                  .getElementById("workshop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="transition-transform group-hover:translate-x-2 flex items-center gap-3">
                Weekly Syllabus
                <LuArrowRight className="text-lg" />
              </span>
            </button>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={fadeUp}
            className="flex gap-10 mt-10 text-md text-gray-800"
          >
            <div className="flex items-center gap-2">
              <HiOutlineVideoCamera className="text-green-900" size={24} />
              Online
            </div>
            <div className="flex items-center gap-2">
              <LuBadgeCheck className="text-green-900" size={24} />
              Hand-On
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineTrophy className="text-green-900" size={24} />
              Certificate
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative flex gap-6"
        >
          {/* Left image */}
          <motion.div
            variants={scaleIn}
            className="w-[48%] flex flex-col gap-5"
          >
            <img src={Banner1} className="rounded-2xl h-[275px] object-cover" />

            {/* Testimonial card */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-5"
            >
              <div className="flex -space-x-2 mb-2">
                {[
                  BannerAvatar1,
                  BannerAvatar2,
                  BannerAvatar3,
                  BannerAvatar4,
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-8 h-8 rounded-full border"
                  />
                ))}
              </div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <p className="text-sm text-gray-700">
                <strong>20+ professionals</strong> are already ahead of you.
              </p>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div variants={scaleIn} className="w-[52%]">
            <img src={Banner2} className="rounded-2xl h-[450px] object-cover" />
          </motion.div>

          {/* Curved arrow */}
          <motion.div
            variants={fadeIn}
            className="absolute bottom-[-25px] left-[-70px] flex items-end gap-3"
          >
            <svg
              width="83"
              height="116"
              viewBox="0 0 83 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M81.5001 115.864C82.0524 115.864 82.5001 115.416 82.5001 114.864C82.5001 114.312 82.0524 113.864 81.5001 113.864V114.864V115.864ZM34.5001 110.864L34.1183 111.788L34.5001 110.864ZM13.5001 95.364L12.7408 96.0147L13.5001 95.364ZM1 66.364L0 66.3639L1 66.364ZM10.9908 31.0802L10.237 30.4231L10.9908 31.0802ZM18.0582 25.7266L17.7217 24.7849L18.0582 25.7266ZM26.5584 27.9503L25.9241 28.7233L26.5584 27.9503ZM31.4654 34.9581L32.4026 34.6093L31.4654 34.9581ZM31.6571 39.9768L32.425 40.6173L31.6571 39.9768ZM28.81 41.5399L28.975 42.5262L28.81 41.5399ZM24.7795 40.308L24.1987 41.122L24.7795 40.308ZM19.9953 32.3083L19.0342 32.5844L19.9953 32.3083ZM20.0511 19.3439L19.0982 19.0405L20.0511 19.3439ZM24.1431 12.9539L23.4777 12.2073L24.1431 12.9539ZM31.3333 8.60884L31.058 7.64747L31.0057 7.66245L30.9554 7.68301L31.3333 8.60884ZM37.0944 7.42722L37.055 6.428L37.0304 6.42897L37.006 6.43114L37.0944 7.42722ZM44.8913 8.07106C45.2818 7.68054 45.2818 7.04737 44.8913 6.65685L38.5273 0.292885C38.1368 -0.0976396 37.5036 -0.0976396 37.1131 0.292885C36.7226 0.683409 36.7226 1.31657 37.1131 1.7071L42.7699 7.36395L37.1131 13.0208C36.7226 13.4113 36.7226 14.0445 37.1131 14.435C37.5036 14.8255 38.1368 14.8255 38.5273 14.435L44.8913 8.07106ZM81.5001 114.864V113.864C77.5005 113.864 68.1947 113.864 58.684 113.365C53.928 113.116 49.1347 112.743 44.936 112.185C40.715 111.625 37.1758 110.887 34.8819 109.94L34.5001 110.864L34.1183 111.788C36.6664 112.841 40.4233 113.603 44.6726 114.168C48.9443 114.735 53.7957 115.112 58.5793 115.363C68.1475 115.864 77.4998 115.864 81.5001 115.864V114.864ZM34.5001 110.864L34.8819 109.94C29.0194 107.518 19.5745 100.914 14.2593 94.7132L13.5001 95.364L12.7408 96.0147C18.2591 102.453 27.9619 109.245 34.1183 111.788L34.5001 110.864ZM13.5001 95.364L14.2593 94.7132C11.3198 91.2838 8.24428 86.6115 5.90723 81.5685C3.56598 76.5164 1.99988 71.1655 2 66.364L1 66.364L0 66.3639C-0.000129342 71.5624 1.68377 77.2115 4.09261 82.4094C6.50564 87.6164 9.68025 92.4441 12.7408 96.0147L13.5001 95.364ZM1 66.364L2 66.364C2.00052 45.4393 9.90659 33.8458 11.7446 31.7373L10.9908 31.0802L10.237 30.4231C8.09341 32.8821 0.000533283 44.9383 0 66.3639L1 66.364ZM10.9908 31.0802L11.7446 31.7373C14.0163 29.1312 15.838 27.5818 18.3947 26.6682L18.0582 25.7266L17.7217 24.7849C14.6958 25.8661 12.6021 27.7098 10.237 30.4231L10.9908 31.0802ZM18.0582 25.7266L18.3947 26.6682C20.0219 26.0868 21.3315 26.1674 22.4899 26.5743C23.6881 26.9952 24.7773 27.7823 25.9241 28.7233L26.5584 27.9503L27.1928 27.1772C26.0207 26.2155 24.7032 25.232 23.1527 24.6874C21.5624 24.1287 19.7813 24.0489 17.7217 24.7849L18.0582 25.7266ZM26.5584 27.9503L25.9241 28.7233C28.6899 30.9928 29.604 32.8235 30.5282 35.3069L31.4654 34.9581L32.4026 34.6093C31.396 31.9044 30.3101 29.7352 27.1928 27.1772L26.5584 27.9503ZM31.4654 34.9581L30.5282 35.3069C30.7978 36.0314 31.114 36.7784 31.24 37.5513C31.3612 38.2956 31.2714 38.878 30.8892 39.3362L31.6571 39.9768L32.425 40.6173C33.3231 39.5406 33.3848 38.2785 33.2139 37.2297C33.0477 36.2094 32.6279 35.2146 32.4026 34.6093L31.4654 34.9581ZM31.6571 39.9768L30.8892 39.3362C30.3599 39.9708 30.0406 40.1907 29.8039 40.298C29.5284 40.423 29.2839 40.4467 28.6451 40.5536L28.81 41.5399L28.975 42.5262C29.4489 42.4469 30.0494 42.3827 30.63 42.1194C31.2493 41.8386 31.7972 41.37 32.425 40.6173L31.6571 39.9768ZM28.81 41.5399L28.6451 40.5536C27.6763 40.7156 26.5562 40.3472 25.3603 39.4939L24.7795 40.308L24.1987 41.122C25.6004 42.1221 27.2613 42.8127 28.975 42.5262L28.81 41.5399ZM24.7795 40.308L25.3603 39.4939C22.6669 37.5723 21.7083 34.6499 20.9564 32.0322L19.9953 32.3083L19.0342 32.5844C19.7821 35.1882 20.8836 38.7568 24.1987 41.122L24.7795 40.308ZM19.9953 32.3083L20.9564 32.0322C20.6059 30.8118 20.3106 28.6524 20.264 26.2879C20.2174 23.9219 20.4228 21.4724 21.004 19.6474L20.0511 19.3439L19.0982 19.0405C18.4214 21.1661 18.2159 23.8654 18.2644 26.3272C18.3129 28.7905 18.6187 31.138 19.0342 32.5844L19.9953 32.3083ZM20.0511 19.3439L21.004 19.6474C21.4624 18.2075 21.9171 17.1769 22.4895 16.2899C23.0609 15.4046 23.7773 14.6195 24.8084 13.7004L24.1431 12.9539L23.4777 12.2073C22.3658 13.1984 21.5107 14.1183 20.8091 15.2054C20.1085 16.291 19.5887 17.5004 19.0982 19.0405L20.0511 19.3439ZM24.1431 12.9539L24.8084 13.7004C26.7116 12.0042 28.7598 10.7395 31.7112 9.53468L31.3333 8.60884L30.9554 7.68301C27.8256 8.96057 25.5749 10.3382 23.4777 12.2073L24.1431 12.9539ZM31.3333 8.60884L31.6086 9.57021C33.765 8.95276 35.1821 8.60098 37.1829 8.4233L37.0944 7.42722L37.006 6.43114C34.8161 6.62562 33.2559 7.01818 31.058 7.64747L31.3333 8.60884ZM37.0944 7.42722L37.1338 8.42644C38.713 8.36416 41.3899 8.36395 44.1842 8.36395V7.36395V6.36395C41.4108 6.36395 38.6839 6.36375 37.055 6.428L37.0944 7.42722Z"
                fill="#154E2E"
              />
            </svg>

            <span className="text-sm text-green-800 italic underline cursor-pointer">
              See what our candidate says!
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
