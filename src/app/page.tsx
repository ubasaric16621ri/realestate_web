"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const backgroundImages = [
  "/photos/house1.jpg",
  "/photos/house2.jpg",
  "/photos/house3.jpg",
  "/photos/house4.jpg",
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);
  const [query, setQuery] = useState("");
  const suggestions = ["New York", "London", "Belgrade", "Barcelona"];
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setFilteredSuggestions(
        suggestions.filter((s) =>
          s.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  }, [query]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Slideshow */}
      {backgroundImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Background ${index}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 transform scale-105 ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 0 }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Navbar using shadcn Navigation Menu */}
      <nav className="absolute top-0 left-0 right-0 z-30 bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold">EstateIQ</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="cursor-pointer">
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/browse" className="cursor-pointer">
                    Browse
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/login" className="cursor-pointer">
                    Login
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/register"
                    className="cursor-pointer bg-white text-black px-3 py-1 rounded-md"
                  >
                    Register
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-screen px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
          Find Your Perfect Property
        </h1>
        <p className="text-lg text-gray-200 max-w-xl">
          Search real estate listings powered by AI across top global cities.
        </p>
        <div className="w-full max-w-md flex flex-col items-center gap-2">
          <div className="w-full flex gap-2">
            <input
              type="text"
              placeholder="Search for a city, town, or country..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded bg-white/70 backdrop-blur-sm text-black"
            />
            <Button className="bg-white text-black font-semibold">Search</Button>
          </div>
          {filteredSuggestions.length > 0 && (
            <ul className="w-full bg-white/90 text-black rounded shadow mt-1 text-left">
              {filteredSuggestions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setQuery(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
