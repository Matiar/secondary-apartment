export type Listing = {
  id: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  priceBdt: string;
  imageSrc: string;
  badges: string[];
};

export const listings: Listing[] = [
  {
    id: "l1",
    title: "Sunny 3-bed apartment with lift & parking",
    location: "Gulshan 2, Dhaka",
    beds: 3,
    baths: 3,
    sqft: 1720,
    priceBdt: "৳ 3.45 Cr",
    imageSrc: "/images/apartment-1.svg",
    badges: ["Verified", "Ready-to-move"],
  },
  {
    id: "l2",
    title: "Corner unit, excellent natural light",
    location: "Banani, Dhaka",
    beds: 3,
    baths: 3,
    sqft: 1650,
    priceBdt: "৳ 3.15 Cr",
    imageSrc: "/images/apartment-2.svg",
    badges: ["Verified", "Prime"],
  },
  {
    id: "l3",
    title: "Family-friendly layout near schools",
    location: "Dhanmondi, Dhaka",
    beds: 4,
    baths: 4,
    sqft: 2050,
    priceBdt: "৳ 3.95 Cr",
    imageSrc: "/images/apartment-3.svg",
    badges: ["Verified", "Valuation-ready"],
  },
];

