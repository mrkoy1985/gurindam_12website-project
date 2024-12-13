import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className=" flex justify-content-space-between bg-sidebar text-white p-4 vh-100">
      <div>
        <a href="d-flex align-items-center ">
          <i className="bi bi-bootstrap fs-5 me-2"></i>
          <span className="fs-4 text-color">BK-Online</span>
        </a>
        <hr className="text-secondary" />
        <ul className="nav nav-pills flex-column p-0 m-0">
          <li className="nav item p-1">
            <a href="" className="nav-link text white px-2">
              <i className="bi bi-people me-2 fs-5 text-color"></i>
              <Link to="/orientasi">
                <span className="fs-5 text-color">Layanan Orientasi</span>
              </Link>
            </a>
          </li>
          <li className="nav item p-1">
            <a href="" className="nav-link text white px-2">
              <i className="bi bi-people me-2 fs-5 text-color"></i>
              <Link to="/konsultasi">
                <span className="fs-5 text-color">Layanan Informasi</span>
              </Link>
            </a>
          </li>
        </ul>
        <div>
          <hr className="text-secondary" />
          <i className=" bi bi-person"> </i>
          <span>Yousaf</span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
