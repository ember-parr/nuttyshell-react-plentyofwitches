import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

export const NavBar = (props) => {
  return (
    <Navbar className="sticky-top navBar" color="dark" expand="md">
      <Nav>
        <NavItem>
          <NavLink className="text-white" href="/" active>
            Home
          </NavLink>
        </NavItem>
        <NavItem className="justify-content-end">
          <NavLink className="text-white" href="/events">
            Events
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white" href="/tasks">
            Tasks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white" href="/articles">
            Articles
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white" href="/friends">
            Friends
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="text-white"
            href={`/friends/detail/${parseInt(localStorage.user)}`}
          >
            My Account
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
