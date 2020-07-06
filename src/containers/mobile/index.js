import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
const Homepage = lazy(() => import("./Homepage"));
const CompanyPage = lazy(() => import("../desktop/Company_page"));

const Mobile = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/company" component={CompanyPage} />
      </Switch>
    </Suspense>
  );
};

export default Mobile;
