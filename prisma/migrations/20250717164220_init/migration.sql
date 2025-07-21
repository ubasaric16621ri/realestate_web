-- CreateTable
CREATE TABLE "Listing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "size_m2" REAL NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "rooms" INTEGER NOT NULL,
    "property_type" TEXT NOT NULL,
    "ref_id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "price_per_m2" REAL NOT NULL,
    "source_url" TEXT NOT NULL,
    "scraped_at" DATETIME NOT NULL
);
