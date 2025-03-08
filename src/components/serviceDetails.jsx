"use client";
import { MdOutlineAcUnit } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaTv } from "react-icons/fa";
import { PiTelevisionBold, PiBathtub } from "react-icons/pi";
import { GiChimney, GiWaterDrop } from "react-icons/gi";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export const serviceDetails = {
  "Electrician-visit-charge": {
    title: "Electrician Visit and Charge Services",
    description:
      "Affordable electrician visit and charge services for homeowners.",
    price: {
      cost: {
        cost: 199,
        details: [
          "A professional will visit your location for assessment.",
          "Understanding your home and any potential issues.",
          "Our technician will assess and recommend the best service options.",
          "We will provide a quote based on your location and needs.",
        ],
      },
    },
    icon: (
      <img
        src="/electrician.png"
        alt="electrician"
        // size="40"
        className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4"
      />
    ),
  },
  "air-conditioner": {
    title: "Air Conditioner Services",
    description: "Expert AC repair and maintenance services to keep you cool.",
    price: {
      installation: {
        cost: 1400,
        details: [
          "Our technician will visit your location at the scheduled time.",
          "They will inspect the area and ensure all necessary tools are available.",
          "Installation will be completed within 1-2 hours depending on the service.",
          "Basic demo and functionality checks will be performed.",
          "Warranty and service guidelines will be provided post-installation.",
        ],
      },
      service: {
        cost: 499,
        details: [
          "Thorough inspection of the AC unit.",
          "Cleaning of filters and external parts.",
          "Checking gas levels and cooling efficiency.",
          "Providing maintenance tips to enhance performance.",
        ],
      },
      repair: {
        cost: 199,
        details: [
          "Diagnosis of the issue by an expert technician.",
          "Replacement of faulty components if necessary.",
          "Testing and quality check after repair.",
          "Ensuring proper cooling and airflow efficiency.",
        ],
      },
    },
    icon: <MdOutlineAcUnit size="40" />,
  },

  "washing-machine": {
    title: "Washing Machine Services",
    description:
      "Get your washing machine running smoothly with our expert repair.",
    price: {
      installation: {
        cost: 399,
        details: [
          "Unboxing and assembling the washing machine.",
          "Checking water inlet and drainage connections.",
          "Testing spin cycle and operational efficiency.",
          "Providing user guidance on detergent and settings.",
        ],
      },
      service: {
        cost: 500,
        details: [
          "Deep cleaning of drum and filter.",
          "Checking motor and belt condition.",
          "Ensuring smooth operation and proper drainage.",
        ],
      },
      repair: {
        cost: 199,
        details: [
          "Identifying and troubleshooting mechanical issues.",
          "Fixing drainage and spin cycle problems.",
          "Replacing damaged parts like motor or pump if needed.",
        ],
      },
    },
    icon: <GiWashingMachine size="40" />,
  },

  refrigerator: {
    title: "Refrigerator Repair",
    description: "We fix all types of refrigerators with guaranteed service.",
    price: {
      "Gas refilling": {
        cost: 2200,
        details: [
          "Positioning and leveling of the refrigerator.",
          "Checking power supply and compressor function.",
          "Ensuring proper cooling settings and operation.",
        ],
      },
      service: {
        cost: 399,
        details: [
          "Cleaning condenser coils and internal compartments.",
          "Checking gas levels and compressor efficiency.",
          "Fixing minor operational issues.",
        ],
      },
      repair: {
        cost: 199,
        details: [
          "Diagnosing cooling and power issues.",
          "Replacing damaged thermostats or compressors.",
          "Ensuring proper sealing of doors and vents.",
        ],
      },
    },
    icon: <CgSmartHomeRefrigerator size="40" />,
  },

  tv: {
    title: "TV & Appliances Repair",
    description:
      "Fix your TV and home appliances with our professional services.",
    price: {
      installation: {
        cost: 499,
        details: [
          "Mounting and securing the TV on the wall or stand.",
          "Connecting all necessary cables and ensuring functionality.",
          "Performing a test run and user guidance.",
        ],
      },
      // service: {
      //   cost: 299,
      //   details: [
      //     "Cleaning and checking internal circuits.",
      //     "Ensuring proper display and audio functionality.",
      //     "Fixing minor connectivity issues.",
      //   ],
      // },
      repair: {
        cost: 299,
        details: [
          "Diagnosing display or sound issues.",
          "Replacing faulty circuits or connectors.",
          "Ensuring complete functionality and durability.",
        ],
      },
    },
    icon: <FaTv size="40" />,
  },

  "microwave-oven": {
    title: "Microwave Oven Services",
    description: "We repair microwave ovens of all brands efficiently.",
    price: {
      installation: {
        cost: 399,
        details: [
          "Unboxing and setting up the microwave.",
          "Checking power supply and operational safety.",
          "Testing heating efficiency and basic guidance.",
        ],
      },
      service: {
        cost: 399,
        details: [
          "Cleaning internal and external parts.",
          "Ensuring proper heating and timer functionality.",
          "Checking wiring and fixing minor issues.",
        ],
      },
      repair: {
        cost: 199,
        details: [
          "Fixing power issues and heating problems.",
          "Replacing damaged fuses or circuit boards.",
          "Ensuring proper microwave performance.",
        ],
      },
    },
    icon: <PiTelevisionBold size="40" />,
  },

  geyser: {
    title: "Geyser Services",
    description: "Water heater installation and repair services.",
    price: {
      installation: {
        cost: 399,
        details: [
          "Mounting and connecting the geyser to water supply.",
          "Checking wiring and safety mechanisms.",
          "Testing heating functionality and providing usage guidance.",
        ],
      },
      service: {
        cost: 499,
        details: [
          "Checking heating elements and wiring.",
          "Cleaning and descaling for better efficiency.",
          "Ensuring thermostat and safety settings are working.",
        ],
      },
      repair: {
        cost: 199,
        details: [
          "Fixing heating and leakage issues.",
          "Replacing damaged thermostats or heating rods.",
          "Ensuring proper insulation and functionality.",
        ],
      },
    },
    icon: <PiBathtub size="40" />,
  },

  chimney: {
    title: "Chimney Services",
    description: "Installation, servicing, and repair of kitchen chimneys.",
    price: {
      installation: {
        cost: 499,
        details: [
          "Fixing the chimney securely to the wall.",
          "Connecting power and checking airflow.",
          "Testing smoke suction efficiency and providing guidance.",
        ],
      },
      service: {
        cost: 1200,
        details: [
          "Deep cleaning of filters and motor.",
          "Checking suction power and fixing minor issues.",
          "Ensuring noise reduction and proper functioning.",
        ],
      },
      repair: {
        cost: 199,
        details: [
          "Fixing motor and filter issues.",
          "Replacing damaged parts if necessary.",
          "Ensuring optimal air circulation.",
        ],
      },
    },
    icon: <GiChimney size="40" />,
  },

  ro: {
    title: "RO Water Purifier Services",
    description: "Installation, servicing, and repair of RO water purifiers.",
    price: {
      installation: {
        cost: 499,
        details: [
          "Mounting the purifier and connecting water supply.",
          "Ensuring proper filtration and drainage setup.",
          "Testing water quality and flow rate.",
        ],
      },
      service: {
        cost: 399,
        details: [
          "Cleaning filters and checking membranes.",
          "Testing water purity and adjusting settings.",
          "Fixing minor leakage issues.",
        ],
      },
      repair: {
        cost: 199,
        details: [
          "Fixing water leakage and pressure issues.",
          "Replacing damaged filters or membranes.",
          "Ensuring smooth operation and clean water supply.",
        ],
      },
    },
    icon: <GiWaterDrop size="40" />,
  },
  "modular-kitchen": {
    title: "Modular Kitchen Side Visit",
    description: "Expert consultation and services for modular kitchen setup.",
    price: {
      visit: {
        cost: 199,
        details: [
          "A professional will visit your location for assessment.",
          "Understanding your kitchen layout and requirements.",
          "Providing expert advice on design and material selection.",
          "Estimating cost and timeline for installation.",
          "Addressing customer queries and providing recommendations.",
        ],
      },
    },
    icon: <GiChimney size="40" />,
  },
  "window-ac": {
    title: "Window AC Services",
    description:
      "Expert installation, servicing, and repair for window AC units.",
    price: {
      installation: {
        cost: 499,
        details: [
          "Technician will assess the window space for AC fitting.",
          "Securing the AC unit properly in the window frame.",
          "Connecting the power supply and ensuring proper drainage.",
          "Testing cooling efficiency and airflow.",
          "Providing basic operation and maintenance guidelines.",
        ],
      },
      service: {
        cost: 499,
        details: [
          "Cleaning air filters and condenser coils.",
          "Checking gas levels and refilling if needed.",
          "Ensuring smooth fan and compressor operation.",
          "Fixing minor cooling issues and efficiency checks.",
        ],
      },
      repair: {
        cost: 199,
        details: [
          "Diagnosing cooling and electrical issues.",
          "Fixing compressor, thermostat, or wiring faults.",
          "Replacing faulty parts if required.",
          "Ensuring optimal cooling performance post-repair.",
        ],
      },
    },
    icon: <MdOutlineAcUnit size="40" />,
  },
};

const ServiceDetail = () => {
  const params = useParams();
  const pathname = usePathname();
  const serviceId = params.serviceId;
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <h2 className="text-center text-red-500 text-xl mt-10">
        Service not found
      </h2>
    );
  }

  return (
    <div className="p-6 md:p-10 text-center max-w-5xl mx-auto">
      {/* Service Icon */}
      <div className="flex justify-center">{service.icon}</div>

      {/* Title & Description */}
      <h1 className="text-4xl font-extrabold mt-4 text-gray-800">
        {service.title}
      </h1>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        {service.description}
      </p>

      {/* Pricing & Details Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-900">
          Pricing & Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {Object.entries(service.price).map(([key, value]) => (
            <div
              key={key}
              className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 capitalize">
                {key.replace("-", " ")} -{" "}
                <span className="text-blue-500 font-bold">₹{value.cost}</span>
              </h3>
              <Link
                href={`/service/${serviceId}/${key}`}
                className="block bg-blue-600 text-white py-2 px-5 rounded-lg font-semibold mt-4 hover:bg-blue-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
