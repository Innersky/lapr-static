import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './app';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
  uri: process.env.API_SERVER + '/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <AppRouter/>
  </ApolloProvider>
);



ReactDOM.render(<App/>, document.getElementById('root'));
