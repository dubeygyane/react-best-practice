import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";

export default function Sidenav(props) {
  const menus = [
    {
      icon: <MdOutlineDashboard />,
      slug: "/dashboard",
      label: "Dashboard",
    },
    {
      icon: <FaUsersLine />,
      slug: "/dashboard/second",
      label: "Second",
    },
  ];
  return (
    <ul className="list-unstyled">
      {menus.map((item, i) => {
        return (
          <li>
            <Link to={item.slug}>
              <span className="side-nav-icon">{item.icon}</span>
              {props.toggleSidebar && (
                <span className="side-nav-label">{item.label}</span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
