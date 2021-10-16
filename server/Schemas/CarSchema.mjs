// Define "require" to access require in ES6 above...
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
} from "graphql";

import CarType from "./TypeDefs/CarType.mjs";
const carData = require("../carData.json");
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getCarById: {
      type: CarType,
      description: "Gel single Car item by id.",
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return carData.find((car) => car.id === args.id);
      },
    },
    getAllCars: {
      type: new GraphQLList(CarType),
      description: "Gel All Car items.",
      args: {},
      resolve() {
        return carData;
      },
    },
  },
});

export default new GraphQLSchema({ query: RootQuery });
