"use client";
import { useParams } from "next/navigation";
import { serviceDetails } from "./serviceDetails";

const ServiceTypeDetail = () => {
  const { serviceId, serviceType } = useParams();

  const service = serviceDetails?.[serviceId];

  if (!service) {
    return (
      <h2 className="text-center text-red-500 text-xl md:text-2xl lg:text-3xl">
        Service not found
      </h2>
    );
  }

  const serviceData = service.price?.[serviceType];

  if (!serviceData) {
    return (
      <h2 className="text-center text-red-500 text-xl md:text-2xl lg:text-3xl">
        Service type not found
      </h2>
    );
  }

  return (
    <div className="p-6 md:p-10 lg:p-16 flex flex-col items-center text-center">
      {/* Service Icon */}
      <div className="flex justify-center items-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-full shadow-md">
        {service.icon}
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-gray-800">
        {service.title} -{" "}
        {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}
      </h1>

      {/* Description */}
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
        {service.description}
      </p>

      {/* Price Display */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 text-green-600">
        Price: ₹{serviceData.cost}
      </h2>

      {/* Details List */}
      <ul className="mt-4 text-left text-gray-700 list-disc list-inside max-w-lg mx-auto space-y-2">
        {serviceData.details.map((detail, index) => (
          <li key={index} className="text-md md:text-lg">
            {detail}
          </li>
        ))}
      </ul>

      {/* Book Now Button */}
      {/* <button className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md text-lg md:text-xl">
        Book Now
      </button> */}
    </div>
  );
};

export default ServiceTypeDetail;
