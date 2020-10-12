import React from "react";
import { Route } from "react-router-dom";
import { NavBarComponent } from "./nav/NavBarComponent";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const NuttyShell = () => (
  <>
    {/* <NavBarComponent /> */}
    <ApplicationViews />
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
