import React from "react";


export default function Nav(props) {
  return (
    <nav style={props.navStyles}>
      <div style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}>CINEMA PORTAL</div>
      <ul style={props.ulStyles}>
        <li><a style={props.linkStyles} href="#home">Home</a></li>
        <li><a style={props.linkStyles} href="#movies">Movies</a></li>
        <li><a style={props.linkStyles} href="#cinemas">Cinemas</a></li>
      </ul>
    </nav>
  );
}