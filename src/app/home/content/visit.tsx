"use client";

import { MapPin } from "lucide-react";

export default function VisitUs() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-8">
        {/* Info */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Visit Us</h2>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-gray-700" />
            <span className="text-gray-800">
              Shack Collective, Phnom Penh, Cambodia
            </span>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-120 overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.535124674524!2d104.92545101533484!3d11.56457455826133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517ee3112b5d%3A0x37fb903f08a9b8f3!2sShack%20Collective!5e0!3m2!1sen!2skh!4v1692559999999!5m2!1sen!2skh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
