import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
function ProjectMenu() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <ul className="menu">
      <li className="block py-2.5 px-4 rounded hover:bg-blue-300 cursor-pointer">
        <div className=" flex justify-between">
          <span>Projects</span>
          <IoIosArrowDown
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            className={` ${isProjectsOpen ? " rotate-180 " : " rotate-0"} `}
          />
        </div>

        {isProjectsOpen && (
          <ul className="pl-4">
            <li className="block py-2.5 px-4 rounded hover:bg-blue-300 cursor-pointer">
              Project 1<ul className="pl-4"></ul>
            </li>
            <li className="block py-2.5 px-4 rounded hover:bg-blue-300">
              Project 2
            </li>
            <li className="block py-2.5 px-4 rounded hover:bg-blue-300">
              Project 3
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default ProjectMenu;
