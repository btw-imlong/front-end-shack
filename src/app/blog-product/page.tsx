import React from "react";
import Image from "next/image";

const Page = () => {
  // Add all thumbnail images here
  const thumbnails = ["/1.jpeg", "/1.jpeg", "/1.jpeg", "/1.jpeg", "/1.jpeg"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-5">
      {/* Main large image */}
      <div className="flex justify-center items-start mt-10">
        <Image
          src="/1.jpeg"
          alt="Heliconia botanical postcard"
          width={400}
          height={600}
          className="W-100 h-100 rounded-md shadow-md object-cover"
        />
      </div>

      {/* Right side content */}
      <div className="grid grid-cols-[auto_1fr] gap-4">
        {/* Thumbnails */}
        <div className=" gap-4">
          {thumbnails.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-25 h-30 object-cover rounded-md p-2  hover:bg-gray-300 hover:shadow-md duration-200"
            />
          ))}
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <h1 className="text-2xl font-bold">Tamara Venn</h1>
          <p className="italic text-gray-600">Botanical Postcards</p>

          <p className="mt-2 text-gray-800">
            Beautiful postcards depicting an array of local Cambodian flora.
            <br />
            <strong>Postcard size:</strong> 14cm × 10cm
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Tamara Venn is best known for her large scale botanical murals and
            her contrasting miniature pen and ink illustrations of flora.
            Originally from London, UK and having studied painting at Central St
            Martin’s College of Art & Design her work can be seen dotted around
            Cambodia and the UK. Nature, its brilliance and its fragility in
            such an increasingly developing world is the subject that runs
            throughout her work. Each piece celebrates the beauty of the natural
            world – her mission statement, ‘If we take care of nature now we
            won’t only be left with painted reminders of what was once here
            before’.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
