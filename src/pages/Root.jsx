import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/Nav.jsx";
export default function Root() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
