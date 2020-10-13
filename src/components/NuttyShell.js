import React from "react";
import { NavBarComponent } from "./nav/NavBar";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const NuttyShell = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("user")) {
          return (
            <>
              <NavBarComponent />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
