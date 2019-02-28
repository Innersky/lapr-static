import ApolloClient from "apollo-boost";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import AppRouter from "./app";

const client = new ApolloClient({
  uri: process.env.API_SERVER + "/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <AppRouter/>
  </ApolloProvider>
);

ReactDOM.render(<App/>, document.getElementById("root"));
