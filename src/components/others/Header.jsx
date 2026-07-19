
import React from "react";

const Header = ({ data }) => {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold text-white">
        Hello <br />
        <span className="text-3xl font-bold text-white">
          {data?.firstName} 👋
        </span>
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;