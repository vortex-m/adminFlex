import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import ProjectMenu from "./ProjectMenu";
function SideBar() {
  return (
    <div className="w-[20%] h-[100svh] cursor-pointer fixed overflow-y-hidden bg-blue-400">
      <nav className="mt-10 space-y-2">
      <ProjectMenu/>
        <li className="block py-2.5 px-4 rounded hover:bg-blue-300">
          Bootcamps
        </li>
        <Link to="studyMaterial" className="block py-2.5 px-4 rounded hover:bg-blue-300">
          Study Materials
        </Link>
        <Link to="/dash/blogs">
        <li className="block py-2.5 px-4 rounded hover:bg-blue-300">Blogs</li>
        </Link>
      </nav>
      <div className=" md:flex  gap-40 m-5 fixed md:top-[50rem]  hidden ">
        <div className="flex justify-end space-x-2">
          <button className="py-2 px-4 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <CiLogout />
          </button>
        </div>
        <div className="flex justify-end space-x-2">
          <button className="py-2 px-4 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
