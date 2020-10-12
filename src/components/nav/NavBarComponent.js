import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export const NavBarCompnent = (props) => {
  return (
    <NavBar>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/events">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tasks">Tasks</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/articles">Articles</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/friends">Friends</NavLink>
        </NavItem>
      </Nav>
    </NavBar>
  );
};
