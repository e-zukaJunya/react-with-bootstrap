import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MyTab from "./tab/TabCont";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={MyTab} />
      {/* <Route>404のっとふぁうんど</Route> */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
