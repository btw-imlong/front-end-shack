"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF0E6] text-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center border border-gray-400 rounded-full">
            <span className="text-sm font-medium text-center">
              Shack <br /> Collective
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-sm mb-10">
          Shack Collective creates inspiring products from bold ideas to
          beautiful designs to spark creativity and connection.
        </p>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-orange-600 mb-4">Contact</h3>
            <p>
              <span className="font-semibold">Phone</span> : 099 705 984
            </p>
            <p>
              <span className="font-semibold">Location</span> : 189 Preah Ang
              Yukanthor Street (19), Phnom Penh, Cambodia
            </p>
            <p>
              <span className="font-semibold">Email</span> :
              shackcollectivephnompenh@gmail.com
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="font-semibold text-orange-600 mb-4">Site Map</h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold text-orange-600 mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.facebook.com/shackcollective">Facebook</a>
              </li>
              <li>
                <a href="shackcollectivepp · 1.4K followers">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
