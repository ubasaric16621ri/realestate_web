"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { mockProperties } from "./data";

export default function BrowsePage() {
  const [query, setQuery] = useState("");

  const filtered = mockProperties.filter((p) =>
    p.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <nav className="sticky top-0 z-30 bg-white shadow px-6 py-4 flex justify-between items-center border-b">
        <Link href="/" className="text-xl font-bold text-black">
          EstateIQ
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-4">
            <NavigationMenuItem>
              <Link href="/browse" passHref>
                <NavigationMenuLink className="cursor-pointer">Browse</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/login" passHref>
                <NavigationMenuLink className="cursor-pointer">Login</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/register" passHref>
                <NavigationMenuLink className="cursor-pointer bg-black text-white px-3 py-1 rounded">Register</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex gap-4 mb-6">
          <Input
            placeholder="Search by city or country..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-white"
          />
          <Button onClick={() => setQuery("")}>Reset</Button>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {filtered.map((property) => (
            <Link key={property.id} href={`/browse/${property.id}`} className="block">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={property.image} alt="" className="h-48 w-full object-cover" />
                <CardHeader>
                  <CardTitle>{property.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-1">
                  <div>{property.location}</div>
                  <div>{property.price}</div>
                  <div>
                    {property.bedrooms} bd • {property.bathrooms} ba • {property.area}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
