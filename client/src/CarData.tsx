export interface CarDataType {
  id: number,
  name: string,
  price: number,
  discountedPrice: number,
  description: string,
  featuredImage: string,
  images: Array<string>,
  specification: {
    MAKE: string,
    MODEL: string,
    STOCK_STATUS: string,
    MADE_YEAR: number,
    MILEAGE: number,
    FUEL_TYPE: string,
    ENGINE: string,
    HORSE_POWER: number,
    TRANSMISSION: string,
    DOORS: number,
    SEATS: number,
    COLOR: string,
    MAX_SPEED: number,
  };
}

export const Makes = [
  "All Makes",
  "Volkswagen",
  "Maserati",
  "Audi",
  "BMW",
  "MERCEDES-BENZ",
  "Lamborghini",
  "LEXUS",
];

export const FuelTypes = [
  "All Fuel Types",
  "Petrol",
  "Diesel",
  "Hybrid",
  "Plugin electric",
  "Electric",
  "Petrol+CNG",
  "LPG",
];

export const TRANSMISSIONs = [
  "All TRANSMISSIONs",
  "Automatic",
  "Manual",
  "Semi-Automatic",
];
