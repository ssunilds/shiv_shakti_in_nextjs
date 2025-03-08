"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuItems = ["Home", "Services", "Booking"];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-gray-200">
          AC Repair Pro
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={28} className="text-gray-300" />
          ) : (
            <Menu size={28} className="text-gray-300" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {menuItems.map((item) => {
            const itemPath =
              item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = pathname === itemPath;

            return (
              <li key={item}>
                <Link
                  href={itemPath}
                  className={`px-3 py-2 rounded-lg transition duration-300 ease-in-out font-medium ${
                    isActive
                      ? "bg-gray-700 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-3 shadow-lg rounded-b-lg"
          >
            {menuItems.map((item) => {
              const itemPath =
                item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === itemPath;

              return (
                <li key={item} className="w-full text-center">
                  <Link
                    href={itemPath}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-3 rounded-lg text-lg transition duration-300 ease-in-out ${
                      isActive
                        ? "bg-gray-700 text-white shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
