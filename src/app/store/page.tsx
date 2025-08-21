import Image from "next/image";
import photo1 from "@/asset/store-photo.jpg";
import photo2 from "@/asset/store-photo2.jpg";
import photo3 from "@/asset/store-photo3.jpg";
import photo4 from "@/asset/store-photo4.jpg";
import photo5 from "@/asset/store-photo5.jpg";

export default function StorePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center border border-white p-6 md:p-10 rounded-lg max-w-lg w-full bg-black/10">
            <div className="flex items-center justify-between mb-4">
              <span>Since</span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border flex items-center justify-center text-xs">
                Shack <br /> Collective
              </div>
              <span>1992</span>
            </div>
            <hr className="w-full h-[2px] bg-gradient-to-l from-white to-transparent mb-6" />

            <h1 className="text-3xl md:text-4xl font-extrabold">OPEN</h1>
            <p className="mt-1 text-2xl text-gray-200">Tuesday – Sunday</p>
            <p className="text-lg md:text-xl font-semibold text-green-300">
              9 AM – 6 PM
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold">CLOSED</h1>

            <p className="text-2xl text-gray-200">Monday</p>
          </div>
        </div>
      </section>
      {/* Address */}{" "}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center md:text-left">
        {" "}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Location
        </h2>{" "}
        <p>179-193 Preah Ang Yukanthor Street (19), Phnom Penh</p>{" "}
        <p className="mt-1">📞 099 705 984</p>{" "}
        <p className="mt-1">✉️ shackcollectivephnompenh@gmail.com</p>{" "}
      </section>{" "}
      {/* Map */}{" "}
      <section className="max-w-4xl mx-auto px-6 mb-10">
        {" "}
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
          {" "}
          Store Location{" "}
        </h2>{" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.475896813143!2d104.9162005!3d11.5527821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109512f4c84f52d%3A0xf20e!2s179-193%20Preah%20Ang%20Yukanthor%20St%20(19)%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1692600000000!5m2!1sen!2skh"
          width="100%"
          height="350"
          className="rounded-lg shadow-md"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>{" "}
      </section>
      {/* Store Photos */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Store Photos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[photo1, photo4, photo5].map((p, i) => (
            <Image
              key={i}
              src={p}
              alt={`Store photo ${i + 1}`}
              className="rounded-lg shadow w-full"
            />
          ))}

          {/* Centered two images */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
            {[photo2, photo3].map((p, i) => (
              <Image
                key={i}
                src={p}
                alt={`Inside photo ${i + 1}`}
                className="rounded-lg shadow w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
