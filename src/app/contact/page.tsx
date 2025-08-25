"use client";

import { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await axios.post("http://localhost:1337/api/contact-messages", {
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phone,
          message: formData.message,
        },
      });

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 ml-15">Contact Us</h1>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md grid md:grid-cols-2 overflow-hidden">
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

          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-black/20 rounded-full"></div>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your First Name"
                  required
                  className="mt-1 w-full border-b border-gray-300 focus:border-[#7A3E26] focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your Last Name"
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="mt-1 w-full border-b border-gray-300 focus:border-[#7A3E26] focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={4}
                required
                className="mt-1 w-full border-b border-gray-300 focus:border-[#7A3E26] focus:outline-none py-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#7A3E26] text-white px-6 py-2 rounded-md shadow hover:bg-[#5c2e1c] transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2">
                ❌ Failed to send message. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
