import React from "react";
import NavbarLink from "../NavbarLink";
import "./style.css";

const Navbar = props => (
  <div className="Navbar">
    <div className="NavbarLink">
        <NavbarLink text={"home page"} link={"/Browse"}/>
    </div>
    <div className="NavbarLink">
        <NavbarLink text={"what is a ferrox?"} link={"/Ferrox"}/>
    </div>
    <div className="NavbarLink">
        <NavbarLink text={"third page"} link={"/Signup"}/>
    </div>
    <div className="NavbarLink">
          <NavbarLink text={"fourth page"} link={"/Login"}/>
    </div>
    <div className="NavbarExtra">
    {props.children}
    </div>
  </div>
);

export default Navbar;
