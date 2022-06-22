import React from "react";
import { Link, Outlet } from "react-router-dom";
import useGroup from "../../hooks/useGroup";
import CustomLink from "../../Shared/CustomLink";

const Groups = () => {
//   const [group] = useGroup();
//   console.log(group);
  return (
    <div>
      <div className="">
        <div className="navbar justify-center bg-green-500 py-3">
          <div className="flex-none ">
            <ul className="menu menu-horizontal p-0 text-xl">
              <li>
                <CustomLink to={"/"}>Group A & B</CustomLink>
              </li>
              <li>
                <CustomLink to={"/group/C-D"}>Group C & D</CustomLink>
              </li>
              <li>
                <CustomLink to={"/group/E-F"}>Group E & F</CustomLink>
              </li>
              <li>
                <CustomLink to={"/group/G-H"}>Group G & H</CustomLink>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Groups;
