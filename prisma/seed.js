const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
await prisma.listing.createMany({
data: [
{
title: '1BR Flat in Dorćol',
price: 88000,
size_m2: 42,
bedrooms: 1,
bathrooms: 1,
rooms: 2,
property_type: 'apartment',
ref_id: 'R1',
location: 'Belgrade',
neighborhood: 'Dorćol',
street: 'Strahinjića Bana',
price_per_m2: 2095,
source_url: 'https://example.com',
scraped_at: new Date(),
},
{
title: '2BR in Zemun',
price: 98000,
size_m2: 55,
bedrooms: 2,
bathrooms: 1,
rooms: 3,
property_type: 'apartment',
ref_id: 'R2',
location: 'Belgrade',
neighborhood: 'Zemun',
street: 'Glavna',
price_per_m2: 1781,
source_url: 'https://example.com',
scraped_at: new Date(),
},
],
});
}

main()
.then(() => {
console.log('Seeded listings!');
prisma.$disconnect();
})
.catch((e) => {
console.error(e);
prisma.$disconnect();
process.exit(1);
});