import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white text-sm px-4 py-1.5 rounded-full shadow-sm hover:bg-gray-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
