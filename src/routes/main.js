import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";

import Landing from "../views/Landing";
import Search from "../views/Search";
import Colleges from "../views/Colleges";
import Error from "../views/Error";

export default function Main() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Landing} />
      <Route exact path={ROUTES.SEARCH} component={Search} />
      <Route exact path={ROUTES.COLLEGES} component={Colleges} />

      {/* This Route should always be at the bottom of all routes */}
      <Route exact path="*" component={Error} />
    </Switch>
  );
}
