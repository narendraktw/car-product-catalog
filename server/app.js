import express from "express";
import { graphqlHTTP } from "express-graphql";
import CarSchema from "./Schemas/CarSchema.mjs";
import cors from "cors";
const app = express();
const PORT = 8000;
app.use(cors());

//graphqlHTTP handle the request coming in...
app.use(
  "/graphql",
  graphqlHTTP({
    schema: CarSchema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});
