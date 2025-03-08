import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { password } = await req.json();
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        if (password === ADMIN_PASSWORD) {
            return NextResponse.json({ success: true, message: "Authenticated" });
        } else {
            return NextResponse.json({ success: false, message: "Invalid Password" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
    }
}
