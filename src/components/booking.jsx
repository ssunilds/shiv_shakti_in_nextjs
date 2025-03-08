"use client";
import { useState } from "react";
import axios from "axios";
import {
  FiUser,
  FiSmartphone,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiHome,
  FiNavigation,
  FiChevronDown,
  FiX,
} from "react-icons/fi";

export default function BookingPage() {
  const serviceList = [
    { name: "Electrician visit charge", price: 199 },
    { name: "air-conditioner installation", price: 1400 },
    { name: "air-conditioner service", price: 499 },
    { name: "air-conditioner repair", price: 199 },
    { name: "Refrigerator Gas refilling", price: 2200 },
    { name: "Refrigerator service", price: 399 },
    { name: "Refrigerator Repair", price: 199 },
    { name: "Washing Machine installation", price: 399 },
    { name: "Washing Machine service", price: 500 },
    { name: "Washing Machine Repair", price: 199 },
    { name: "TV & Appliances installation", price: 499 },
    { name: "TV & Appliances repair", price: 299 },
    { name: "microwave-oven installation", price: 399 },
    { name: "microwave-oven service", price: 399 },
    { name: "microwave-oven Repair", price: 199 },
    { name: "geyser installation", price: 399 },
    { name: "geyser service", price: 499 },
    { name: "geyser Repair", price: 199 },
    { name: "chimney installation", price: 499 },
    { name: "chimney service", price: 1200 },
    { name: "chimney Repair", price: 199 },
    { name: "ro installation", price: 499 },
    { name: "ro service", price: 399 },
    { name: "ro Repair", price: 199 },
    { name: "modular-kitchen visit", price: 199 },
    { name: "window-ac installation", price: 499 },
    { name: "window-ac service", price: 499 },
    { name: "window-ac Repair", price: 199 },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: [],
    appointmentDate: "",
    appointmentTime: "",
    address: {
      houseNumber: "",
      street: "",
      city: "Jaipur",
      pincode: "",
    },
    totalCost: 0,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "serviceType") {
      setFormData((prevData) => {
        const selectedService = serviceList.find((s) => s.name === value);
        if (!selectedService) return prevData;

        let updatedServices = checked
          ? [...prevData.serviceType, selectedService]
          : prevData.serviceType.filter((s) => s.name !== value);

        return {
          ...prevData,
          serviceType: updatedServices,
          totalCost: updatedServices.reduce(
            (sum, service) => sum + service.price,
            0
          ),
        };
      });
    } else if (["houseNumber", "street", "pincode"].includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      setMessage("Please fill in your name, phone.");
      return;
    }

    if (!formData.appointmentDate || !formData.appointmentTime) {
      setMessage("Please select a valid appointment date and time.");
      return;
    }

    if (
      !formData.address.houseNumber ||
      !formData.address.street ||
      !formData.address.pincode
    ) {
      setMessage("Please provide a valid address.");
      return;
    }

    if (formData.serviceType.length === 0) {
      setMessage("Please select at least one service.");
      return;
    }

    const parsedDate = new Date(formData.appointmentDate);
    if (isNaN(parsedDate.getTime())) {
      setMessage("Invalid appointment date.");
      return;
    }

    const formattedDate = parsedDate.toISOString(); // Safe conversion

    try {
      const { data } = await axios.post("/api/booking", {
        ...formData,
        appointmentDate: formattedDate,
      });

      setMessage(data.message || "Booking Successful!");
    } catch (error) {
      setMessage("Something went wrong! Please try again.");
    }
  };

  const handleSelectService = (event) => {
    const selectedService = serviceList.find(
      (service) => service.name === event.target.value
    );

    if (selectedService) {
      const isAlreadySelected = formData.serviceType.some(
        (s) => s.name === selectedService.name
      );

      if (!isAlreadySelected) {
        const updatedServices = [...formData.serviceType, selectedService];

        setFormData((prevData) => ({
          ...prevData,
          serviceType: updatedServices,
          totalCost: updatedServices.reduce(
            (sum, service) => sum + service.price,
            0
          ),
        }));
      }
    }
  };

  const handleRemoveService = (serviceName) => {
    const updatedServices = formData.serviceType.filter(
      (s) => s.name !== serviceName
    );

    setFormData((prevData) => ({
      ...prevData,
      serviceType: updatedServices,
      totalCost: updatedServices.reduce(
        (sum, service) => sum + service.price,
        0
      ),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 sm:p-6 lg:p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm"
      >
        {/* Header */}
        <div className="bg-blue-600 text-white px-6 py-8 sm:rounded-t-2xl">
          <h1 className="text-3xl font-bold mb-2">Book Home Service</h1>
          <p className="opacity-95">
            Quick & reliable service at your doorstep
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Contact Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <FiUser className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Contact Information</h2>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="relative">
                <FiSmartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                <FiCheckCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Select Services
              </h2>
            </div>

            {/* Service Selection */}
            <div className="relative">
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiChevronDown className="w-5 h-5" />
              </div>
              <select
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl 
        focus:outline-none focus:border-blue-500 appearance-none
        bg-white text-gray-700 text-sm sm:text-base"
                onChange={handleSelectService}
                value=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceList.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} - ₹{service.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Services Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {formData.serviceType.map((service) => (
                <div
                  key={service.name}
                  className="relative flex items-center p-3 pr-8 rounded-lg 
          border-2 border-blue-100 bg-blue-50 hover:border-blue-200
          transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {service.name}
                    </div>
                    <div className="text-xs text-blue-600 font-semibold">
                      ₹{service.price}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveService(service.name)}
                    className="absolute right-2 top-1/2 -translate-y-1/2
            text-gray-400 hover:text-red-500 transition-colors
            p-1 rounded-full hover:bg-gray-100"
                    aria-label="Remove service"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Helper Text */}
            {formData.serviceType.length === 0 && (
              <p className="text-sm text-gray-500 mt-2">
                Select services from the dropdown above
              </p>
            )}
          </section>

          {/* Schedule Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <FiClock className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Service Timing</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                {/* <FiClock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" /> */}
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white appearance-none min-h-[48px] text-base"
                  required
                />
              </div>

              <div className="relative">
                {/* <FiClock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" /> */}
                <input
                  type="time"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white appearance-none min-h-[48px] text-base"
                  required
                />
              </div>
            </div>
          </section>

          {/* Address Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <FiMapPin className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Service Address</h2>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <FiHome className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="houseNumber"
                  value={formData.address.houseNumber}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="House Number"
                  required
                />
              </div>

              <div className="relative">
                <FiNavigation className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="street"
                  value={formData.address.street}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Street Address"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    value="Jaipur"
                    readOnly
                    className="w-full px-4 py-3 border rounded-lg bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="pincode"
                    value={formData.address.pincode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Pincode"
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Total & Submit */}
          <section className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-3xl font-bold text-blue-600">
                    ₹{formData.totalCost}
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </div>

            {message && (
              <div
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  message.includes("Successful")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                <FiCheckCircle className="flex-shrink-0" />
                <span>{message}</span>
              </div>
            )}
          </section>
        </div>
      </form>
    </div>
  );
}
