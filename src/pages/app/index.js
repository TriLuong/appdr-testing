import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "layouts";
import routesName from "./routesName";

import "../../assets/scss/_global.scss";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Layout>
      <Switch>
        {routesName.map((route) => (
          <Route
            key={`route-${route.id}`}
            exact
            path={route.route}
            component={route.component}
          />
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
