"use client";
import { FaSnowflake, FaWrench, FaFan } from "react-icons/fa";
import { GiChimney, GiWaterDrop } from "react-icons/gi";
import { MdOutlineAcUnit } from "react-icons/md";
// Dummy Service Data
const services = [
  {
    title: "AC Repair",
    description: "Quick and efficient AC repair services.",
    price: 50,
    icon: <FaWrench />,
  },
  {
    title: "AC Installation",
    description: "Professional AC installation at your home or office.",
    price: 100,
    icon: <FaSnowflake />,
  },
  {
    title: "AC Maintenance",
    description: "Regular maintenance to ensure top performance.",
    price: 80,
    icon: <FaFan />,
  },
  {
    title: "Fridge Repair",
    description: "Fast fridge repair for all brands and models.",
    price: 60,
    icon: <FaWrench />,
  },
  {
    title: "Fridge Installation",
    description: "Professional fridge installation services.",
    price: 120,
    icon: <FaSnowflake />,
  },
  {
    title: "Fridge Maintenance",
    description: "Regular maintenance to keep your fridge running efficiently.",
    price: 90,
    icon: <FaFan />,
  },
  {
    title: "Washing Machine Repair",
    description:
      "Fixing issues with fully automatic & semi-automatic machines.",
    price: 70,
    icon: <FaWrench />,
  },
  {
    title: "Washing Machine Installation",
    description: "Expert installation of washing machines.",
    price: 150,
    icon: <FaSnowflake />,
  },
  {
    title: "Washing Machine Maintenance",
    description: "Routine servicing to enhance washing machine performance.",
    price: 100,
    icon: <FaFan />,
  },
  {
    title: "Geyser Repair",
    description: "Water heater repair services to ensure hot water supply.",
    price: 199,
    icon: <FaWrench />,
  },
  {
    title: "Geyser Installation",
    description: "Safe and professional geyser installation services.",
    price: 399,
    icon: <FaSnowflake />,
  },
  {
    title: "Geyser Maintenance",
    description: "Regular servicing to extend geyser lifespan.",
    price: 499,
    icon: <FaFan />,
  },
  {
    title: "Chimney Repair",
    description: "Expert repair of all types of kitchen chimneys.",
    price: 199,
    icon: <GiChimney size="40" />,
  },
  {
    title: "Chimney Installation",
    description: "Installation of kitchen chimneys for a smoke-free kitchen.",
    price: 499,
    icon: <GiChimney size="40" />,
  },
  {
    title: "Chimney Maintenance",
    description: "Thorough cleaning and servicing for efficient performance.",
    price: 1200,
    icon: <GiChimney size="40" />,
  },
  {
    title: "RO Water Purifier Repair",
    description: "Repair services for all types of RO water purifiers.",
    price: 199,
    icon: <GiWaterDrop size="40" />,
  },
  {
    title: "RO Water Purifier Installation",
    description: "Professional installation of RO water purifiers.",
    price: 499,
    icon: <GiWaterDrop size="40" />,
  },
  {
    title: "RO Water Purifier Maintenance",
    description: "Routine service to ensure clean and safe drinking water.",
    price: 399,
    icon: <GiWaterDrop size="40" />,
  },
  {
    title: "Window AC Repair",
    description: "Repair services for all brands of window AC units.",
    price: 199,
    icon: <MdOutlineAcUnit size="40" />,
  },
  {
    title: "Window AC Installation",
    description: "Professional installation of window AC units.",
    price: 499,
    icon: <MdOutlineAcUnit size="40" />,
  },
  {
    title: "Window AC Maintenance",
    description: "Regular servicing for efficient cooling performance.",
    price: 499,
    icon: <MdOutlineAcUnit size="40" />,
  },
];

// Service Card Component
function ServiceCard({ title, description, price, icon }) {
  return (
    <div className="border p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition">
      {/* Service Icon */}
      <div className="flex justify-center">
        <div className="bg-blue-100 p-3 rounded-full text-blue-500 text-2xl">
          {icon}
        </div>
      </div>

      {/* Service Title & Description */}
      <h2 className="text-xl font-semibold mt-3">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Price */}
      <p className="text-green-600 font-bold text-lg mt-2">Price: ${price}</p>

      {/* Book Now Button */}
      <a href="tel:+916375477987">
        <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 active:bg-green-500 transition">
          Call Now
        </button>
      </a>
    </div>
  );
}

// Services Section
export default function Services() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center">Our Services</h1>
      <p className="text-center text-gray-600 mt-2">
        We provide top-quality AC and home appliance repair services.
      </p>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
