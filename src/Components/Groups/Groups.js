import React from "react";

import useGroup from "../../hooks/useGroup";
import CustomLink from "../../Shared/CustomLink";

const Groups = () => {
  //   const [group] = useGroup();
  //   console.log(group);
  return (
    <div>
      <div className="">
        <div className="navbar justify-center bg-green-500 py-3">
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0 text-xl">
              <li>
                <a href="/">Group A & B</a>
              </li>
              <li>
                <a href="/">Group C & D</a>
              </li>
              <li>
                <a href="/">Group E & F</a>
              </li>
              <li>
                <a href="/">Group G & H</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
