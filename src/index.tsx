import ApolloClient from "apollo-boost";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import AppRouter from "./app";
import GlobalLoadingBar from "./components/loading-indicators/global-loading-bar";
import GlobalLoadingBarReducer from "./components/loading-indicators/global-loading-bar.reducer";

export const store = createStore(GlobalLoadingBarReducer);

const client = new ApolloClient({
  uri: process.env.API_SERVER + "/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <AppRouter/>
    <GlobalLoadingBar/>
  </ApolloProvider>
);

ReactDOM.render(<App/>, document.getElementById("root"));
