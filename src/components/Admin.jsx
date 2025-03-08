"use client";
import { useEffect, useState } from "react";
import {
  FiTrash2,
  FiEdit,
  FiClock,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/booking");
      const data = await res.json();

      if (data.success) {
        setBookings(data.bookings);
      } else {
        console.error("Error fetching bookings");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to update booking status
  const updateBookingStatus = async (id, newStatus) => {
    try {
      const res = await fetch("/api/booking", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id, status: newStatus }),
      });

      const data = await res.json();
      if (data.success) {
        fetchBookings(); // Refresh bookings list
      } else {
        console.error("Error updating booking:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to delete a booking
  const deleteBooking = async (id) => {
    try {
      const res = await fetch("/api/booking", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id }),
      });

      const data = await res.json();
      if (data.success) {
        fetchBookings(); // Refresh bookings list
      } else {
        console.error("Error deleting booking:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to categorize bookings by date
  const categorizeBookings = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);

    const oneMonthAgo = new Date(today);
    oneMonthAgo.setMonth(today.getMonth() - 1);

    const threeMonthsAgo = new Date(today);
    threeMonthsAgo.setMonth(today.getMonth() - 3);

    const categories = {
      Today: [],
      Yesterday: [],
      "This Week": [],
      "This Month": [],
      "Past 3 Months": [],
      Upcoming: [],
    };

    bookings.forEach((booking) => {
      const appointmentDate = new Date(booking.appointmentDate);
      appointmentDate.setHours(0, 0, 0, 0);

      const diffDays = Math.round(
        (appointmentDate - today) / (1000 * 60 * 60 * 24)
      );

      if (diffDays === 0) {
        categories.Today.push(booking);
      } else if (diffDays === -1) {
        categories.Yesterday.push(booking);
      } else if (appointmentDate >= oneWeekAgo && appointmentDate < today) {
        categories["This Week"].push(booking);
      } else if (appointmentDate >= oneMonthAgo && appointmentDate < today) {
        categories["This Month"].push(booking);
      } else if (appointmentDate >= threeMonthsAgo && appointmentDate < today) {
        categories["Past 3 Months"].push(booking);
      } else {
        categories.Upcoming.push(booking);
      }
    });

    return categories;
  };

  const categorizedBookings = categorizeBookings();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Bookings Management
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <p className="text-gray-500 text-lg">No bookings found</p>
          </div>
        ) : (
          Object.entries(categorizedBookings).map(
            ([category, bookings]) =>
              bookings.length > 0 && (
                <div key={category} className="mb-8">
                  <div className="flex items-center gap-3 mb-4 p-3 bg-gray-100 rounded-lg">
                    <FiClock className="text-blue-600 w-5 h-5" />
                    <h2 className="text-xl font-semibold text-gray-800">
                      {category}
                    </h2>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {bookings.length} bookings
                    </span>
                  </div>

                  {/* Desktop Table */}
                  <div className="hidden md:block overflow-x-auto rounded-lg shadow-sm">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          {[
                            "Customer",
                            "Contact",
                            "Services",
                            "Date & Time",
                            "Location",
                            "Status",
                            "Total",
                            "Actions",
                          ].map((header) => (
                            <th
                              key={header}
                              className="px-4 py-3 text-left text-sm font-medium text-gray-700"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {bookings.map((booking) => (
                          <tr key={booking._id}>
                            <td className="px-4 py-3">
                              <div className="font-medium text-gray-900">
                                {booking.name}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-gray-600">
                                {booking.phone}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="space-y-1">
                                {booking.serviceType.map((service, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-between gap-4"
                                  >
                                    <span>{service.name}</span>
                                    <span className="text-blue-600">
                                      ₹{service.price}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-gray-900">
                                {new Date(
                                  booking.appointmentDate
                                ).toLocaleDateString()}
                              </div>
                              <div className="text-gray-500 text-sm">
                                {booking.appointmentTime}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="text-sm">
                                {booking.address?.houseNumber},{" "}
                                {booking.address?.street}
                                <div className="text-gray-500 mt-1">
                                  {booking.address?.city} -{" "}
                                  {booking.address?.pincode}
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <select
                                value={booking.status}
                                onChange={(e) =>
                                  updateBookingStatus(
                                    booking._id,
                                    e.target.value
                                  )
                                }
                                className={`px-2 py-1 rounded-full text-sm ${
                                  booking.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : booking.status === "Cancelled"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>
                            <td className="px-4 py-3 font-semibold text-gray-900">
                              ₹{booking.totalCost}
                            </td>
                            <td className="px-4 py-3">
                              <button
                                onClick={() => deleteBooking(booking._id)}
                                className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50"
                              >
                                <FiTrash2 className="w-5 h-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden space-y-4">
                    {bookings.map((booking) => (
                      <div
                        key={booking._id}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {booking.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {booking.phone}
                            </p>
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              booking.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : booking.status === "Cancelled"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium">Services:</span>
                            {booking.serviceType.map((service, index) => (
                              <div
                                key={index}
                                className="flex justify-between ml-2"
                              >
                                <span>{service.name}</span>
                                <span className="text-blue-600">
                                  ₹{service.price}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="text-sm">
                            <span className="font-medium">Date:</span>
                            <span className="ml-2">
                              {new Date(
                                booking.appointmentDate
                              ).toLocaleDateString()}
                              <span className="text-gray-500 ml-2">
                                {booking.appointmentTime}
                              </span>
                            </span>
                          </div>

                          <div className="text-sm">
                            <span className="font-medium">Address:</span>
                            <div className="ml-2 text-gray-600">
                              {booking.address?.houseNumber},{" "}
                              {booking.address?.street}
                              <br />
                              {booking.address?.city} -{" "}
                              {booking.address?.pincode}
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-3">
                            <span className="font-semibold">
                              Total: ₹{booking.totalCost}
                            </span>
                            <div className="flex gap-2">
                              <select
                                value={booking.status}
                                onChange={(e) =>
                                  updateBookingStatus(
                                    booking._id,
                                    e.target.value
                                  )
                                }
                                className="text-sm bg-gray-100 rounded-lg px-2 py-1"
                              >
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                              <button
                                onClick={() => deleteBooking(booking._id)}
                                className="text-red-600 hover:text-red-800 p-1"
                              >
                                <FiTrash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )
        )}
      </div>
    </div>
  );
}
