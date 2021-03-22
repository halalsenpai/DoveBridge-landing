import React from "react";

import { Home, Login } from "../pages/index";

export const Routes = [
  { path: "/", component: Home, title: "Home", exact: true },
  { path: "/login", component: Login, title: "Login", exact: true },
];
