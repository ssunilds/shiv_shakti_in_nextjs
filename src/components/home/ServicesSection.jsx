"use client";
import { motion } from "framer-motion";
import { FaFan, FaRegSnowflake, FaTv } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import SectionHeader from "@/components/home/WhyChooseUs"
import stagger from "@/components/home/WhyChooseUs"
import fadeIn from "@/components/home/WhyChooseUs"

const services = [
  {
    title: "AC Repair",
    icon: <FaFan className="w-12 h-12 mb-4 text-blue-600" />,
    description: "Expert repair & maintenance for all AC types",
    price: "599",
  },
  {
    title: "Refrigerator",
    icon: <FaRegSnowflake className="w-12 h-12 mb-4 text-blue-600" />,
    description: "Cooling system repair & gas charging",
    price: "799",
  },
  {
    title: "Washing Machine",
    icon: <GiWashingMachine className="w-12 h-12 mb-4 text-black" />,
    description: "Motor repair & leakage solutions",
    price: "899",
  },
  {
    title: "TV & Appliances",
    icon: <FaTv className="w-12 h-12 mb-4 text-blue-600" />,
    description: "Smart TV repair & installation",
    price: "699",
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center justify-center text-black mb-6">
      {service.icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
    <div className="flex justify-between items-center"></div>
  </motion.div>
);

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Services"
          subtitle="Fast, reliable, and professional appliance repair services"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
