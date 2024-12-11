import { Outlet } from "react-router-dom";
import NavigationBar from "./Navbarlandpage";

function Layout() {
  return (
    <div style={{ marginTop: "70px" }}>
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default Layout;
