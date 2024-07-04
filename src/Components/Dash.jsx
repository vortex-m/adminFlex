import SideBar from "./Parts/SideBar";
import MainDash from "./Parts/MainDash";
import { Outlet } from "react-router-dom";

function Dash() {
  return (
    <div className="flex">
      <SideBar />

      <Outlet />
    </div>
  );
}
export default Dash;
