import { FaTv } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiWashingMachine } from "react-icons/gi";
import Link from "next/link";
import Head from "next/head";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  const services = [
    {
      id: "air-conditioner",
      icon: (
        <TbAirConditioning className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "Air Conditioner",
    },
    {
      id: "refrigerator",
      icon: (
        <CgSmartHomeRefrigerator className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "Refrigerator",
    },
    {
      id: "washing-machine",
      icon: (
        <GiWashingMachine className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "Washing Machine",
    },
    {
      id: "microwave-oven",
      icon: (
        <img
          src="/microwave-oven.png"
          alt="Microwave Oven Repair & Services"
          className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4"
        />
      ),
      name: "Microwave Oven",
    },
    {
      id: "geyser",
      icon: (
        <img
          src="/water-boiler.png"
          alt="Geyser (Water Heater) Repair & Services"
          className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4"
        />
      ),
      name: "Geyser (Water Heater)",
    },
    {
      id: "ro",
      icon: (
        <img
          src="/appliance.png"
          alt="RO Water Purifier Repair & Services"
          className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4"
        />
      ),
      name: "RO Water Purifier",
    },
    {
      id: "chimney",
      icon: (
        <img
          src="/chimney.png"
          alt="Kitchen Chimney Repair & Services"
          className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4"
        />
      ),
      name: "Chimney",
    },
    {
      id: "window-ac",
      icon: (
        <img
          src="/window.png"
          alt="Window AC Repair & Services"
          className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4"
        />
      ),
      name: "Window AC",
    },
    {
      id: "tv",
      icon: (
        <FaTv className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "TV & Home Appliance",
    },
    {
      id: "modular-kitchen",
      icon: (
        <img
          src="/kitchen-furniture.png"
          alt="Modular Kitchen Setup & Services"
          className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4"
        />
      ),
      name: "Modular Kitchen",
    },
    {
      id: "Electrician-visit-charge",
      icon: (
        <img
          src="/electrician.png"
          alt="Electrician Services"
          className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4"
        />
      ),
      name: "Electrician",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Shiv Shakti Home Appliance Services - Repair & Installation
        </title>
        <meta
          name="description"
          content="Get the best home appliance repair and installation services in your city. We specialize in AC, Refrigerator, Washing Machine, Microwave Oven, and more."
        />
        <meta
          name="keywords"
          content="Home Appliance Repair, AC Service, Refrigerator Repair, Washing Machine Repair, Electrician Services"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-black text-yellow-500 w-full h-auto pt-8">
        {/* Top Section - Logo and Business Name */}
        <div className="sm:absolute flex justify-between sm:justify-start sm:w-1/2 items-center sm:items-start px-4 bg-black">
          <div className="w-1/2 sm:w-auto flex justify-center px-4 mr-4">
            <div className="border-4 border-yellow-500 rounded-lg p-2">
              <img
                src="/logo.jpeg"
                alt="Shiv Shakti Home Appliance Services Logo"
                className="w-24 sm:w-32 h-24 sm:h-32"
              />
            </div>
          </div>

          <div className="w-1/2 sm:w-auto text-left">
            <h1 className="text-2xl font-bold">
              Shiv Shakti Home Appliance Services
            </h1>
            <p className="text-lg font-semibold mt-2 hidden sm:block">
              Contact No: 6375477987
            </p>
          </div>
        </div>
        <p className="text-lg font-semibold mt-2 px-4 sm:hidden">
          Contact No: 6375477987
        </p>

        {/* Middle Section - Appliance Images */}
        <div className="flex justify-end items-end w-[100%] sm:w-[75%] right-0 mt-6 bg-yellow-500 rounded-tl-full overflow-hidden relative ml-auto">
          <div className="w-full h-full bg-yellow-500">
            <img
              src="/b.png"
              alt="Shiv Shakti Appliance Repair Service"
              className="w-[80%] h-full sm:hidden ml-auto"
            />
            <img
              src="/1.png"
              alt="Expert Home Appliance Repair Technicians"
              className="w-full h-full object-cover hidden sm:block"
            />
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full mt-1"></div>

        {/* Bottom Section - Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center pt-6 pb-6 px-4 bg-yellow-500">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/service/${service.id}`}
              className="relative border-2 border-black p-2 block"
            >
              <span className="absolute top-0 left-4 sm:left-12 right-4 sm:right-12 h-[6px] bg-black rounded-br-2xl rounded-bl-2xl" />
              {service.icon}
              <p className="mt-2 font-semibold text-black">{service.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WhyChooseUs Section */}
      <WhyChooseUs />
    </div>
  );
}
