"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF0E6] text-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 flex items-center justify-center border border-gray-400 rounded-full">
            <span className="text-sm sm:text-base font-medium text-center leading-snug">
              Shack <br /> Collective
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base mb-10 px-4 sm:px-0">
          Shack Collective creates inspiring products from bold ideas to
          beautiful designs to spark creativity and connection.
        </p>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left px-4 sm:px-0">
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-orange-600 mb-4 text-base sm:text-lg">
              Contact
            </h3>
            <p className="text-sm sm:text-base">
              <span className="font-semibold">Phone</span>: 099 705 984
            </p>
            <p className="text-sm sm:text-base">
              <span className="font-semibold">Location</span>: 189 Preah Ang
              Yukanthor Street (19), Phnom Penh, Cambodia
            </p>
            <p className="text-sm sm:text-base">
              <span className="font-semibold">Email</span>:
              shackcollectivephnompenh@gmail.com
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="font-semibold text-orange-600 mb-4 text-base sm:text-lg">
              Site Map
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/products">Our Products</Link>
              </li>
              <li>
                <Link href="/visit">Visit Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-orange-600 mb-4 text-base sm:text-lg">
              Follow Us
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="https://www.facebook.com/shackcollective"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/shackcollectivepp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-xs sm:text-sm text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} Shack Collective. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
