import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";

import Products from "./components/Products";
import "./app.css";

const App = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <Switch>
        <Route exact component={Products} />
      </Switch>
      <footer className="footer">FOOTER</footer>
    </>
  );
};

export default App;
