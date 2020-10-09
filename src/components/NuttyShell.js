import React from "react";
import { Route } from "react-router-dom";
// import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./NuttyShell.css";

export const NuttyShell = () => (
  <>
    {/* <NavBar /> */}
    <ApplicationViews />
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
