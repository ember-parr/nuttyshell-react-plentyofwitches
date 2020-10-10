import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./NuttyShell.css";

export const NuttyShell = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("user")) {
          return (
            <>
              {/* <NavBar /> */}
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
    <ApplicationViews />
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
