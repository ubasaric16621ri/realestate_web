export type Property = {
  id: number
  title: string
  location: string
  price: string
  image: string
  bedrooms: number
  bathrooms: number
  area: string
  description: string
}

export const mockProperties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment in Belgrade",
    location: "Belgrade, Serbia",
    price: "$120,000",
    image: "/photos/house1.jpg",
    bedrooms: 2,
    bathrooms: 1,
    area: "75m²",
    description:
      "Bright apartment close to the city center featuring an open layout and balcony views of the river.",
  },
  {
    id: 2,
    title: "Cozy Studio in Paris",
    location: "Paris, France",
    price: "$220,000",
    image: "/photos/house2.jpg",
    bedrooms: 1,
    bathrooms: 1,
    area: "40m²",
    description:
      "Charming studio within walking distance of the Eiffel Tower. Ideal for short stays or investment.",
  },
  {
    id: 3,
    title: "Luxury Villa in Dubai",
    location: "Dubai, UAE",
    price: "$1,200,000",
    image: "/photos/house3.jpg",
    bedrooms: 5,
    bathrooms: 4,
    area: "500m²",
    description:
      "Expansive villa with private pool and modern finishes located in one of Dubai's most prestigious districts.",
  },
]
