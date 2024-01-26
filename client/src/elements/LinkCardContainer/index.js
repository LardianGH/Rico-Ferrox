import React from "react";
import LinkCard from "../LinkCard";
import "./style.css";

const Navbar = props => (
  <div className="LinkCardContainer">

        
        <h1>LINKS</h1>


        <LinkCard text={"Tik Tok: rico_the_ferrox"} link={"https://www.tiktok.com/@rico_the_ferrox?_t=8jKUX6MmJYs&_r=1"}/>

        <LinkCard text={"Instagram: rico.the.ferrox"} link={"https://www.instagram.com/rico.the.ferrox?igsh=MW1mNWVoMzV3czE5Zw%3D%3D&utm_source=qr"}/>

        <LinkCard text={"Instagram: banegas.art"} link={"https://www.instagram.com/banegas.art?igsh=MXExZmtkNmF0aDlkdg%3D%3D&utm_source=qr"}/>

        <LinkCard text={"Facebook: Bailey Banegas"} link={"https://www.facebook.com/share/Ad6kPCZ2HrS6Hb13/?mibextid=WC7FNe"}/>

  </div>
);

export default Navbar;
