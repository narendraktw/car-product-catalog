import { gql } from "@apollo/client";
export const LOAD_CARS = gql`
  query {
    getAllCars {
      id
      name
      price
      discountedPrice
      description
      specification {
        MAKE
        MODEL
        STOCK_STATUS
        MADE_YEAR
        MILEAGE
        FUEL_TYPE
        ENGINE
        HORSE_POWER
        TRANSMISSION
        DOORS
        SEATS
        COLOR
        MAX_SPEED
      }
    }
  }
`;

export const LOAD_CARS_BY_ID = gql`
  query getCarById($id: Int) {
    getCarById(id: $id) {
      id
      name
      price
      discountedPrice
      description
      specification {
        MAKE
        MODEL
        STOCK_STATUS
        MADE_YEAR
        MILEAGE
        FUEL_TYPE
        ENGINE
        HORSE_POWER
        TRANSMISSION
        DOORS
        SEATS
        COLOR
        MAX_SPEED
      }
    }
  }
`;
