import React from "react";
import { Link } from "react-router-dom";

import logo from "../utils/logo.png";

const Header = () => {
  function handleClick() {
    const navItems = document.querySelector(".navItems");
    const shadow = document.querySelector(".shadow");

    if (navItems?.className === "navItems") {
      navItems.className += " responsive";
      shadow.className += " shadow1";
    } else {
      navItems.className = "navItems";
      shadow.className = "shadow";
    }
    window.onresize = function () {
      navItems.className = "navItems";
      shadow.className = "shadow";
    };
  }

  function NavItems() {
    return (
      <>
        <Link to="/" className="navLink">
          Home
        </Link>

        <Link to="/products" className="navLink">
          Products
        </Link>

        <Link to="/cart" className="navLink">
          Cart
        </Link>
      </>
    );
  }

  return (
    <nav id="nav" className="nav">
      <Link to="/">
        <img width="100px" src={logo} alt="Logo" />
      </Link>

      <div className="navItems">{NavItems()}</div>
      <div onClick={handleClick} className="shadow"></div>
      <div onClick={handleClick} className="bars">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
