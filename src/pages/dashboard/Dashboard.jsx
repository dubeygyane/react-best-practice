import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <button>
        <Link to={"/dashboard/first"}>First Component</Link>
      </button>
      <button>
        <Link to={"/dashboard/second"}>Second Component</Link>
      </button>
      <Outlet />
    </>
  );
}
