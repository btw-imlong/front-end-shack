/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  // Fetch categories from Strapi
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("http://localhost:1337/api/a-categories");
        const data = await res.json();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  // Shared styles for main navbar links
  const navLinkClass =
    "inline-flex items-center text-gray-800 font-medium text-sm hover:underline";

  // Shared styles for dropdown links
  const dropdownLinkClass =
    "inline-flex items-center gap-2 p-2 rounded text-gray-800 font-medium text-sm hover:bg-gray-100 whitespace-nowrap";

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold">
          Shack Collective
        </Link>

        {/* Middle: Navigation links (desktop only) */}
        <div className="hidden md:flex items-center gap-x-6">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/about" className={navLinkClass}>
            About
          </Link>

          {/* Product dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navLinkClass}>
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 w-48">
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <NavigationMenuLink asChild key={cat.id}>
                        <Link
                          href={`/product/${cat.id}`}
                          className={dropdownLinkClass}
                        >
                          {cat.name}
                        </Link>
                      </NavigationMenuLink>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 px-2">Loading...</p>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/store" className={navLinkClass}>
            Visit Us
          </Link>
          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>
        </div>

        {/* Right: Language dropdown (desktop only) */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navLinkClass}>
                  🌐 Language
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 w-40">
                  <NavigationMenuLink asChild>
                    <Link href="#" className={dropdownLinkClass}>
                      🇬🇧 English
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className={dropdownLinkClass}>
                      🇰🇭 Khmer
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile drawer (slides from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <Link
            href="/"
            className={navLinkClass}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={navLinkClass}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <div>
            <p className="font-medium text-gray-800">Product</p>
            <div className="ml-3 mt-1 flex flex-col space-y-1">
              {categories.length > 0 ? (
                categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/product/${cat.id}`}
                    className={dropdownLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-500">Loading...</p>
              )}
            </div>
          </div>
          <Link
            href="/store"
            className={navLinkClass}
            onClick={() => setMobileOpen(false)}
          >
            Visit Us
          </Link>
          <Link
            href="/contact"
            className={navLinkClass}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <div>
            <p className="font-medium text-gray-800">🌐 Language</p>
            <div className="ml-3 mt-1 flex flex-col space-y-1">
              <Link
                href="#"
                className={dropdownLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                🇬🇧 English
              </Link>
              <Link
                href="#"
                className={dropdownLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                🇰🇭 Khmer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
