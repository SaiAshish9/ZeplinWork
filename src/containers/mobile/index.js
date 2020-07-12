import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
const Homepage = lazy(() => import("./Homepage"));
const CompanyPage = lazy(() => import("./Company_page"));
const Terms = lazy(() => import("./TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));

const Mobile = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy_policy" component={PrivacyPolicy} />
      </Switch>
    </Suspense>
  );
};

export default Mobile;
