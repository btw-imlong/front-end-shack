// app/contact/page.tsx  (or components/ContactUs.tsx)

import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 ml-15">Contact Us</h1>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md grid md:grid-cols-2 overflow-hidden">
        {/* Left Contact Info */}
        <div className="relative bg-[#7A3E26] text-white p-8 flex flex-col justify-between overflow-hidden">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+855 99 705 984</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>shackcollectivephnompenh@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>
                  189 Preah Ang Yukanthor Street (Street 19), Daun Penh, Phnom
                  Penh
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTelegram size={22} />
            </a>
          </div>

          {/* Circle Decoration */}
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-black/20 rounded-full"></div>
        </div>

        {/* Right Contact Form */}
        <div className="p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="mt-1 w-full border-b border-gray-300 focus:border-[#7A3E26] focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  className="mt-1 w-full border-b border-gray-300 focus:border-[#7A3E26] focus:outline-none py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 w-full border-b border-gray-300 focus:border-[#7A3E26] focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="mt-1 w-full border-b border-gray-300 focus:border-[#7A3E26] focus:outline-none py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={4}
                className="mt-1 w-full border-b border-gray-300 focus:border-[#7A3E26] focus:outline-none py-2"
              />
            </div>

            <button
              type="submit"
              className="bg-[#7A3E26] text-white px-6 py-2 rounded-md shadow hover:bg-[#5c2e1c] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
