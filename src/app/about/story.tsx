import React from "react";
import Image from "next/image";

const Story = () => {
  return (
    <div className="space-y-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10">
        <div className="flex flex-col justify-center text-center p-6">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Shack Collective is more than a store — it’s a space that celebrates
            the creativity of Cambodia’s independent makers. We curate a unique
            mix of handmade fashion, home décor, art, and gifts from local
            brands who care about quality, culture, and community. Whether
            you&apos;re a traveler or a local shopper, our shop is here to
            inspire conscious living and support meaningful craftsmanship.
          </p>
        </div>
        <div>
          <Image
            src="/story-about.jpg"
            alt="Our Story"
            className="object-cover w-full h-full rounded-md shadow-md"
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div>
          <Image
            src="/people.jpeg"
            alt="Our Story"
            className="object-cover w-full h-full rounded-md shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center text-center p-6">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Shack Collective, our mission is to celebrate and share the
            beauty of Cambodia through meaningful souvenirs. We are dedicated to
            supporting local artisans and showcasing handcrafted products that
            reflect the country’s rich culture, creativity, and traditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
