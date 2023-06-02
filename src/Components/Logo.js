import React from "react";
import logo from "../image/logo-thinley-retina600-dark.png";
import "./Logo.css";

export default function Logo() {
  return (
    <>
      <a className="navbar-brand" href="/">
        <img src={logo} alt="" className="logo" />
      </a>
    </>
  );
}
