import { connectDB } from "@/app/api/lib/db";
import Booking from "@/app/api/models/Booking";
import { NextResponse } from "next/server";

// 🟢 CREATE Booking (POST)
export async function POST(req) {
  try {
    await connectDB();
    let body = await req.json();

    // Convert appointmentDate to Date format
    if (body.appointmentDate) {
      body.appointmentDate = new Date(body.appointmentDate);
    }

    // ✅ Store full serviceType array with name & price
    if (body.serviceType && body.serviceType.length > 0) {
      body.totalCost = body.serviceType.reduce((sum, service) => sum + (service.price || 0), 0);
    } else {
      return NextResponse.json(
        { success: false, message: "Please select at least one service." },
        { status: 400 }
      );
    }

    // If total cost is still 0, return an error
    if (body.totalCost === 0) {
      return NextResponse.json(
        { success: false, message: "Invalid service selection. Total cost cannot be zero." },
        { status: 400 }
      );
    }

    // ✅ Save the full serviceType array in MongoDB
    const newBooking = new Booking({
      ...body, // Keep all data as it is
      serviceType: body.serviceType, // Store {name, price} properly
    });

    await newBooking.save();

    return NextResponse.json(
      { message: "Booking Successful!", totalCost: body.totalCost },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Booking Error:", error);
    return NextResponse.json(
      { success: false, message: "Error booking service", error },
      { status: 500 }
    );
  }
}

// 🟡 GET All Bookings
export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching bookings" }, { status: 500 });
  }
}

// 🔵 UPDATE Booking (PATCH)
export async function PATCH(req) {
  try {
    await connectDB();
    const { _id, ...updates } = await req.json(); // _id se identify karna h booking

    if (!_id) {
      return NextResponse.json({ success: false, message: "Booking ID required" }, { status: 400 });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(_id, updates, { new: true });

    if (!updatedBooking) {
      return NextResponse.json({ success: false, message: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Booking Updated", booking: updatedBooking });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error updating booking", error }, { status: 500 });
  }
}

// 🔴 DELETE Booking (DELETE)
export async function DELETE(req) {
  try {
    await connectDB();
    const { _id } = await req.json(); // Frontend se _id bhejna hoga

    if (!_id) {
      return NextResponse.json({ success: false, message: "Booking ID required" }, { status: 400 });
    }

    const deletedBooking = await Booking.findByIdAndDelete(_id);

    if (!deletedBooking) {
      return NextResponse.json({ success: false, message: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Booking Deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting booking", error }, { status: 500 });
  }
}
