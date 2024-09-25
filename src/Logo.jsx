import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ isSticky }) => {
  return (
    <Link to="/" className={`flex justify-center items-center py-2 transition-all duration-500 transform ${isSticky ? "scale-75" : "scale-100"}`}>
      <h1 className="font-serif text-2xl text-[#E9EFEC]" style={{ fontFamily: "'Times New Roman', serif" }}>
        COL
      </h1>
    </Link>
  );
};

export default Logo;
