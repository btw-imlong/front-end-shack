import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const VisitUs = () => {
  return (
    <div className="mt-20 mx-20">
      <h2 className="font-bold text-2xl p-2">Visit Us In Store</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Come explore our curated space in the heart of Phnom Penh. See the work
        of local makers up close and shop with purpose. 
      </p>
      <h4>Store Info : </h4>
      <p className="text-gray-700 leading-relaxed mb-4">📍 189 Street 19, Phnom Penh
        <br />
        🕘 Tuesday–Sunday: 9 AM – 6 PM
        <br />
        📧 hello@shackcollective.com
        <br />
        📞 +855 12 345 678
        <br />
        📷 Instagram: @shackcollectivepp
      </p>
      <h1 className="font-bold text-2xl p-2">“We believe in thoughtful shopping, local creativity, and celebrating every handmade piece.”</h1>
      <div className="flex mt-6">
      <Button asChild>
          <Link
            href="/"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
          >
          Shop Online          </Link>
        </Button>
         <Button asChild>
          <Link
            href="/"
            className="bg-yellow-500 ml-20 max-sm:ml-10 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
          >
          Visit Us         </Link>
        </Button>
        </div>
    </div>
  );
};

export default VisitUs;
