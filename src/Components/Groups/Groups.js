import React from "react";
import { Link, Outlet } from "react-router-dom";
import useGroup from "../../hooks/useGroup";

const Groups = () => {
  const [group] = useGroup();
  console.log(group);
  return (
    <div>
      <div className="">
        <div className="navbar justify-center bg-red-500 py-3">
          <div className="flex-none ">
            <ul className="menu menu-horizontal p-0 text-xl">
              <li>
                <Link to={"/"}>Group A & B</Link>
              </li>
              <li>
                <Link to={"/group/C-D"}>Group C & D</Link>
              </li>
              <li>
                <Link to={"/group/E-F"}>Group E & F</Link>
              </li>
              <li>
                <Link to={"/group/G-H"}>Group G & H</Link>
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
