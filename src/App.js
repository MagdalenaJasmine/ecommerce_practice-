import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import ShopPage from "./components/shop/shop.component";
import Header from "./header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInandSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInandSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
