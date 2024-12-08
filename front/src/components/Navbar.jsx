import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container bg-gray-700 text-white px-5">
        <div className="me-auto flex justify-between items-center py-4">
          <Link to="/">
            <h2>Auth</h2>
          </Link>
          <div className="flex justify-center items-center">
            <Link to="/login" className="px-4 py-2 mx-2 bg-gray-800 rounded-md">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
