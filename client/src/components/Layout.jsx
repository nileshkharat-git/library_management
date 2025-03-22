import React from "react";
import { Outlet, Link } from "react-router-dom";
import useToken from "../hooks/useToken";

const Layout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    return window.location.href = "/";
  };
  const { token } = useToken();
  return (
    <>
      <nav className="bg-[#8F87F1] text-white p-4 flex justify-between">
        <h1 className="text-2xl">Library management</h1>
        <aside className="mx-42">
          <ul className="flex gap-8">
            {token && token !== "null" ? (
              <>
                <li>
                  <Link to={"/addbook"}>Add Book</Link>
                </li>
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li className="cursor-pointer" onClick={handleLogout}>Logout</li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/books"}>Books</Link>
                </li>
                <li>
                  <Link to={"/signin"}>Create Admin</Link>
                </li>
              </>
            )}
          </ul>
        </aside>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
