"use client";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTools,
  FaRegSnowflake,
  FaStar,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Head from "next/head";

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "Excellent AC repair service! Fixed in no time.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review: "Very professional & affordable. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    review: "Technicians were on time and did a great job!",
    rating: 4,
  },
];

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeIn}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && <p className="text-xl text-gray-600 mt-4">{subtitle}</p>}
  </motion.div>
);

export default function WhyChooseUs() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Best AC Repair & Service in Jaipur | 24/7 Support</title>
        <meta
          name="description"
          content="Get professional and affordable AC repair services in Jaipur. Certified experts, same-day service, and 24/7 support available. Call now!"
        />
        <meta
          property="og:title"
          content="Best AC Repair & Service in Jaipur"
        />
        <meta
          property="og:description"
          content="Professional and affordable AC repair service in Jaipur. Contact us for a same-day fix!"
        />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta property="og:url" content="your-website-url" />
      </Head>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Why Choose Us?"
            subtitle="Best AC Repair & Service in Jaipur"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Certified Experts",
                text: "Our technicians are certified and background-checked",
                icon: (
                  <FaTools
                    className="w-12 h-12 text-blue-600"
                    aria-label="Certified Experts"
                  />
                ),
              },
              {
                title: "Same-Day Service",
                text: "Emergency services available 24/7",
                icon: (
                  <FaCheckCircle
                    className="w-12 h-12 text-blue-600"
                    aria-label="Same-Day Service"
                  />
                ),
              },
              {
                title: "Price Guarantee",
                text: "Upfront pricing with no hidden fees",
                icon: (
                  <FaStar
                    className="w-12 h-12 text-blue-600"
                    aria-label="Price Guarantee"
                  />
                ),
              },
              {
                title: "Warranty",
                text: "90-day warranty on all repairs",
                icon: (
                  <FaRegSnowflake
                    className="w-12 h-12 text-blue-600"
                    aria-label="Warranty"
                  />
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="mb-6 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Customer Stories"
            subtitle="What our customers say about us"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-md relative"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white p-4 rounded-xl">
                  <FaStar className="w-8 h-8" />
                </div>
                <div className="flex my-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    {testimonial.name[0]}
                  </div>
                  <span className="font-semibold text-gray-800">
                    {testimonial.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-red-700 p-8 rounded-2xl"
          >
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 justify-center md:justify-start">
                <FaPhoneAlt className="w-8 h-8" />
                Emergency Repair Needed?
              </h3>
              <p className="text-xl">24/7 Immediate Response Team Available</p>
            </div>
            <a
              href="tel:+916375477987"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-gray-50 min-w-[250px] justify-center"
            >
              <FaPhoneAlt className="w-6 h-6" />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Get In Touch" />
          <motion.div
            variants={fadeIn}
            className="bg-blue-600 text-white p-8 sm:p-12 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
              Contact Information
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                <div>
                  <p className="font-semibold">24/7 Support</p>
                  <a
                    href="tel:+916375477987"
                    className="text-lg sm:text-2xl font-bold hover:underline"
                  >
                    +91 6375477987
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                <div>
                  <p className="font-semibold">Email Address</p>
                  <a
                    href="mailto:ssunil56455@gmail.com"
                    className="text-lg sm:text-xl font-medium hover:underline"
                  >
                    ssunil56455@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                <div>
                  <p className="font-semibold">Service Areas</p>
                  <p className="text-lg sm:text-xl font-medium">Jaipur</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
