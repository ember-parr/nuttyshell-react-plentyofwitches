import React from "react";
import logo from "../../img/pow-logo.png";

export const Home = () => (
  <div className="text-center mt-5">
    <img src={logo} />
    <h1 className="display-3" style={{ color: "#DED210" }}>
      Plenty O'Witches
    </h1>
    <small>Funs & Scares When You're Not There!</small>

    <address>
      <div>Visit Us at the Nashville Software School Location</div>
      <div>500 Witches Way</div>
    </address>
  </div>
);
