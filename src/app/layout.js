import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shiv Shakti Home Appliance Services - Repair & Installation Services in Jaipur | 24/7 Expert Support",
  description: "Get professional & affordable AC repair services in Jaipur. Certified experts, same-day service, and 24/7 support available. Call now!",
  keywords: "AC repair Jaipur, AC service Jaipur, AC maintenance, air conditioner repair",
  openGraph: {
    title: "Best AC Repair & Services in Jaipur",
    description: "Need quick AC repair? Get expert services in Jaipur with same-day support.",
    url: "https://yourwebsite.com/",
    images: ["https://yourwebsite.com/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Repair & Services in Jaipur",
    description: "Get expert AC repair services with same-day support. Contact now!",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}

        {/* Phone Icon - Left Side */}
        <div className="fixed bottom-5 left-5 z-50">
          <a
            href="tel:+916375477987"
            className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            <FaPhoneAlt size={26} />
          </a>
        </div>

        {/* WhatsApp Icon - Right Side */}
        <div className="fixed bottom-5 right-5 z-50">
          <a
            href="https://wa.link/hk9jgm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp size={26} />
          </a>
        </div>

        <Footer />
      </body>
    </html>
  );
}
