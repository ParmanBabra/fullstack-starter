import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "components/App/App";
import Login from "components/Login/login";
import * as serviceWorker from "serviceWorker";

import { Provider } from "react-redux";
import store from "store";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_HOST
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Login />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
