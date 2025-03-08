import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 lg:pr-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              AC Repair Pro
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Professional AC & appliance repair services with 24/7 emergency
              support. Serving the community since 2025.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <Icon size={24} aria-label="Social media icon" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider text-blue-400">
              Services
            </h3>
            <nav className="mt-4 space-y-2">
              {[
                "AC Installation",
                "Maintenance",
                "Repair",
                "Emergency Service",
              ].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider text-blue-400">
              Quick Links
            </h3>
            <nav className="mt-4 space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider text-blue-400">
              Contact
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin
                  className="flex-shrink-0 mt-1 text-blue-400"
                  size={20}
                />
                <span className="text-gray-300">
                  📍 Home Service Across Jaipur
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-blue-400" size={20} />
                <a
                  href="tel:+916375477987"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  +91 6375477987
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-blue-400" size={20} />
                <a
                  href="mailto:ssunil56455@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  ssunil56455@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-400">
            © 2025 AC Repair Pro. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
