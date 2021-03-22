import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Routes } from "../routing/index";
import { Spin } from "antd";
import CHeader from "../uiComponents/Cheader/CHeader";
import CFooter from "../uiComponents/CFooter/CFooter";

function Layout() {
  return (
    <>
      <div className="c-layout">
        <CHeader />

        <div className="content">
          <Switch>
            {Routes.map((route, index) => (
              <Route key={index} exact={route.exact} path={route.path} component={route.component} />
            ))}

            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>

      <CFooter />
    </>
  );
}

export default Layout;
