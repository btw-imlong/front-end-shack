"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
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

        {/* Middle: Navigation links */}
        <div className="flex items-center gap-x-6">
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
                  <NavigationMenuLink asChild>
                    <Link
                      href="/product/category1"
                      className={dropdownLinkClass}
                    >
                      Category 1
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/product/category2"
                      className={dropdownLinkClass}
                    >
                      Category 2
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/visit-us" className={navLinkClass}>
            Visit Us
          </Link>
          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>
        </div>

        {/* Right: Language dropdown */}
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
    </nav>
  );
}
