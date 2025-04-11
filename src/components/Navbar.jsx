import React from "react";
import { Link, useLocation } from "react-router";

import { ActiveNav } from "./ActiveNav";

// icons
import { CgMenuLeftAlt } from "react-icons/cg";
import { GrHomeRounded } from "react-icons/gr";
import { GoTasklist } from "react-icons/go";
import { GoNumber } from "react-icons/go";

export const Navbar = () => {
    const location = useLocation()
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CgMenuLeftAlt className="text-2xl  " />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2 "
          >
            <li>
              <Link to={"/"}>
                <GrHomeRounded className=" text-lg " />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={"/todo"}>
                <GoTasklist className=" text-2xl " />
                <span>Todo</span>
              </Link>
            </li>
            <li>
              <Link to={"/numberguess"}>
                <GoNumber className=" text-2xl " />
                <span>Number Guess</span>
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Shakhawat</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <Link to={"/"}>
              <GrHomeRounded className=" text-lg " />
              <span>Home</span>
              {location.pathname == "/" && <ActiveNav />}
            </Link>
          </li>
          <li>
            <Link to={"/todo"}>
              <GoTasklist className=" text-2xl " />
              <span>Todo</span>
              {location.pathname == "/todo" && <ActiveNav />}
            </Link>
          </li>
          <li>
            <Link to={"/numberguess"}>
              <GoNumber className=" text-2xl " />
              <span>Number Guess</span>
              {location.pathname == "/numberguess" && <ActiveNav />}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Todo.NumberGuess.Redux</Link>
      </div>
    </div>
  );
};
