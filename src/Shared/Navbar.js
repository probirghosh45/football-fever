import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Homepage</NavLink>
              </li>
              <li>
                <HashLink to="#selected-countries" >Selected Countries</HashLink>
              </li>
              <li>
                <NavLink to="/countries">All Countries</NavLink>
              </li>
              <li>
                <NavLink to="/tickets">Tickets</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <NavLink style={{ textDecoration: 'none' }} to="/home" class="btn btn-ghost normal-case text-xl">Football Fever</NavLink>
        </div>
        <div class="navbar-end">
        </div>
      </div>
    </>
  );
};

export default Navbar;
