import * as React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import * as styles from "./app.css";
import gql from "graphql-tag";
import {Query} from "react-apollo";

const Index = () => <h2>Home</h2>;
const About = () => <h2><Books/></h2>;
const Users = () => <h2>{process.env.REACT_APP_ENV}</h2>;

const Books = () => (
  <Query
    query={gql`
      {
        books {
          title
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.books.map(({ title }: {title: string}) => (
        <div key={title}>
          <p>{title}</p>
        </div>
      ));
    }}
  </Query>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <nav className={styles.body}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
