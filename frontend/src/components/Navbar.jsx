import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handlelogout = () => {};
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">NoteApp</Link>
      </div>
      <input
        type="text"
        placeholder="Search Notes..."
        className="bg-gray-600 px-4 py-2 rounded"
      />
      <div>
        <span className="mr-4">user name</span>
        <Link to="/login" className="bg-blue-500 px-4 py-2 rounded mr-4">
          Login
        </Link>
        <Link to="/signup" className="bg-green-500 px-4 py-2 rounded mr-4">
          Signup
        </Link>

        <button onClick={handlelogout} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
