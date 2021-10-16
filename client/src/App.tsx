import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import CarList from "./Layouts/CarList";
import IndividualCar from "./Layouts/IndividualCar";

//GraphQL connection/settings...
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:8000/graphql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(
    {
      addTypename: false
    }
  ),
  link: link,
})
//End GraphQL connection/settings...

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <CarList />
          </Route>
          <Route exact path="/:id">
            <IndividualCar />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
