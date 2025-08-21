import photo1 from "@/asset/store-photo.jpg";
import photo2 from "@/asset/store-photo2.jpg";
import photo3 from "@/asset/store-photo3.jpg";
import photo4 from "@/asset/store-photo4.jpg";
import photo5 from "@/asset/store-photo5.jpg";
import herosec from "@/asset/Pasted image.png";
export default function StorePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section with background image */}
      <section
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${herosec.src})` }}
      >
        <div className="bg-black bg-opacity-40 absolute inset-0"></div>

        <div className="relative z-10 text-center text-white border border-white p-6 md:p-14 max-w-md md:max-w-lg w-full">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <span className="text-sm md:text-base">Since</span>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-xs md:text-sm">
              Shack <br /> Collective
            </div>
            <span className="text-sm md:text-base">1992</span>
          </div>

          <hr className="border-gray-300 mb-4 md:mb-6" />

          <h1 className="text-3xl md:text-4xl font-extrabold">OPEN</h1>
          <p className="text-base md:text-lg mt-1">Tuesday – Sunday</p>
          <p className="text-xl md:text-2xl font-semibold text-green-300">
            9 AM – 6 PM
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 text-red-400">
            CLOSED
          </h2>
          <p className="text-base md:text-lg">Monday</p>
        </div>
      </section>

      {/* <section
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black bg-opacity-40 absolute inset-0"></div>

        <div className="relative z-10 text-center text-white border border-white p-6 md:p-14 max-w-md md:max-w-lg w-full">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <span className="text-sm md:text-base">Since</span>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-xs md:text-sm">
              Shack <br /> Collective
            </div>
            <span className="text-sm md:text-base">1992</span>
          </div>

          <hr className="border-gray-300 mb-4 md:mb-6" />

          <h1 className="text-3xl md:text-4xl font-extrabold">OPEN</h1>
          <p className="text-base md:text-lg mt-1">Tuesday – Sunday</p>
          <p className="text-xl md:text-2xl font-semibold text-green-300">
            9 AM – 6 PM
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 text-red-400">
            CLOSED
          </h2>
          <p className="text-base md:text-lg">Monday</p>
        </div>
      </section> */}

      {/* Address */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Location</h2>
        <p>189 Preah Ang Yukanthor Street (19), Phnom Penh</p>
        <p className="mt-1">📞 602-774-4735</p>
        <p className="mt-1">✉️ hello@unifiedui.com</p>
      </section>

      {/* Map */}
      <section className="max-w-4xl mx-auto px-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
          Store Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.476865765933!2d104.917445!3d11.552755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109512f4c84f52d%3A0xf20e!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1612929914834!5m2!1sen!2skh"
          width="100%"
          height="350"
          className="rounded-lg shadow-md"
          loading="lazy"
        ></iframe>
      </section>

      {/* Store Photos */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          Store Photos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src={photo1.src}
            alt="Store Front"
            className="rounded-lg shadow w-full"
          />
          <img
            src={photo4.src}
            alt="Display"
            className="rounded-lg shadow w-full"
          />
          <img
            src={photo5.src}
            alt="Shelves"
            className="rounded-lg shadow w-full"
          />

          {/* Centered two images */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4 justify-items-center w-full">
            <img
              src={photo2.src}
              alt="Inside Store"
              className="rounded-lg shadow w-full md:w-auto"
            />
            <img
              src={photo3.src}
              alt="Products"
              className="rounded-lg shadow w-full md:w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
