import React from "react";
import CollectionOverview from "../collection-overview/collection-overview.component";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
  </div>
);

export default ShopPage;
