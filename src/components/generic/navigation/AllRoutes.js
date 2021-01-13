import React from "react";

import config from "../../../config";
import { Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
      {config.pages.map((pagesData, j) => {
        console.log(pagesData);

        return (
          <Route
            key={j}
            exact
            path={`/${pagesData.path}`}
            component={pagesData.Component}
          />
        );
      })}
    </>
  );
};

export default AllRoutes;
