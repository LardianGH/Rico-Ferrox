import React from "react";
import "./style.css";

const LinkCard = props => (
  <div className="LinkCard" href={props.link}>
    <p> {props.text}</p>
  </div>
);

export default LinkCard;
