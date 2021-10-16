import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

const specificationType = new GraphQLObjectType({
  name: "specification",
  fields: () => ({
    MAKE: { type: GraphQLString },
    MODEL: { type: GraphQLString },
    STOCK_STATUS: { type: GraphQLString },
    MADE_YEAR: { type: GraphQLInt },
    MILEAGE: { type: GraphQLInt },
    FUEL_TYPE: { type: GraphQLString },
    ENGINE: { type: GraphQLString },
    HORSE_POWER: { type: GraphQLInt },
    TRANSMISSION: { type: GraphQLString },
    DOORS: { type: GraphQLInt },
    SEATS: { type: GraphQLInt },
    COLOR: { type: GraphQLString },
    MAX_SPEED: { type: GraphQLInt },
  }),
});

const CarType = new GraphQLObjectType({
  name: "Car",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    price: { type: GraphQLInt },
    discountedPrice: { type: GraphQLString },
    description: { type: GraphQLString },
    featuredimage: { type: GraphQLString },
    images: { type: GraphQLString },
    specification: { type: specificationType },
  }),
});

export default CarType;
