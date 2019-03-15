import ApolloClient from "apollo-boost";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import AppRouter from "./app";
import GlobalLoadingBar from "./components/loading-indicators/global-loading-bar";
import { rootReducer } from "./redux-reducers";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

const client = new ApolloClient({
  uri: process.env.API_SERVER + "/graphql",
});

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <AppRouter/>
      <GlobalLoadingBar/>
    </ApolloProvider>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById("root"));
