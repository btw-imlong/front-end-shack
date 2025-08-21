"use client";
import Image from "next/image";
import { X, Search } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="flex items-center gap-6 p-6">
        {/* Filter Button */}
        <button className="flex items-center gap-2 bg-[#FAF0E6] text-black font-semibold px-4 py-2 rounded-full hover:bg-[#F5E5D8] transition">
          Filter
          <X size={16} />
        </button>

        {/* Search Input */}
        <div className="flex items-center border border-gray-400 rounded-md px-3 py-2 w-64 ml-220 max-sm:ml-20">
          <Search size={18} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none w-full bg-transparent text-sm"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Wrapper */}
          <div className="relative w-full h-60 group">
            {/* Default Image */}
            <Image
              src="/4.avif"
              alt="Product"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src="/3.jpg"
              alt="Product Hover"
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h2 className="font-semibold text-gray-800">La Plantation</h2>
            <p className="text-sm text-gray-600 mt-2">
              Grown naturally in Kampot and harvested with care. Perfect for
              cooking, gifting, or elevating your meals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
