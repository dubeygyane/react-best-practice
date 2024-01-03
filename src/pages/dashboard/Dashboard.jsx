import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import Sidenav from "../../component/Sidenav";

const screenHeight = window.innerHeight;
const mainAreaHeight = screenHeight - 60;
export default function Dashboard() {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <>
      <div className="nav d-flex w-100 bg-danger justify-content-between">
        <div className="first-half d-flex">
          <div className="logo">
            <span>logohere</span>
          </div>
          <div className="ms-4 burger-menu">
            <span
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className="cursor-pointer"
            >
              {toggleSidebar ? <GiHamburgerMenu /> : <IoIosArrowForward />}
            </span>
          </div>
        </div>
        <div className="second-half">
          <ul className="d-flex list-unstyled">
            <li className="me-3">a</li>
            <li className="me-3">b</li>
            <li className="me-3">c</li>
          </ul>
        </div>
      </div>
      <div
        className="main-area d-flex justify-content-between"
        style={{ height: `${mainAreaHeight}px` }}
      >
        <div
          className="side-nav bg-success"
          style={{ width: `${toggleSidebar ? "20%" : "6%"}` }}
        >
          <Sidenav toggleSidebar={toggleSidebar}/>
        </div>
        <div
          className="content bg-primary"
          style={{ width: `${toggleSidebar ? "80%" : "94%"}` }}
        ><Outlet /></div>
      </div>
    </>
  );
}
