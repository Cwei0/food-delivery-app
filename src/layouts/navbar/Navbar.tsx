import React from "react";
import { Logo } from "../../components";

export const Navbar = () => {
  return (
    <>
      <nav>
        {/* Left section */}
        <Logo />
        {/* Midddle section */}
        <div>Menu bar</div>
        {/* Right section */}
        <div>Search, basket and User login</div>
      </nav>
    </>
  );
};
