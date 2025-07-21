"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { mockProperties } from "../data";

export default function PropertyPage() {
  const params = useParams();
  const id = Number(params.id);
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return <div className="p-6">Property not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6 bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold">{property.title}</h1>
        <img
          src={property.image}
          alt=""
          className="w-full h-80 object-cover rounded"
        />
        <div className="text-muted-foreground space-y-1">
          <div>{property.location}</div>
          <div>{property.price}</div>
          <div>
            {property.bedrooms} bd • {property.bathrooms} ba • {property.area}
          </div>
        </div>
        <p>{property.description}</p>
        <Link href="/browse" className="text-primary hover:underline">
          Back to Browse
        </Link>
      </div>
    </div>
  );
}
