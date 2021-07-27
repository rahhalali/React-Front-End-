import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from "../images/logo.jpg";
import { FaTwitter } from "react-icons/fa";
import "./Navbar.css";
import { Fragment } from "react";
const myFunction = () => {
  var x = document.getElementById("cont");
  var y = document.getElementById("show");
  if (x.style.display === "none") {
    y.style.transform = "rotate(180deg)";
    y.style.transition = "2s";
    x.style.display = "block";
  } else {
    x.style.display = "none";

    y.style.transform = "rotate(90deg)";
    y.style.transition = "2s";
  }
};
const Navbar = () => {
  const [nav, setNav] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4001/nav");
      const info = await response.json();
      setNav(info.data);
    };
    fetchData();
  }, []);
  console.log("nav 1", nav);
  return (
    <div className="con">
      <div className="nav">
        <div className="uls">
          <div id="show" onClick={myFunction}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id="cont">
            <ul id="list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="logo">
          <img src={Logo} alt="" height="80px" width="90px"></img>
        </div>
        <div className="icons">
          {nav.map((num,index) => (
            <Fragment key={index}>
              <a
                href={num.twitter}
                target="_blank"
                target="_blank"
                target="_blank"
                className="twit"
              >
                <FaTwitter></FaTwitter>
              </a>
              <a
                href={num.facebook}
                target="_blank"
                target="_blank"
                target="_blank"
              >
                <FaFacebook></FaFacebook>
              </a>
              <a
                href={num.instagram}
                target="_blank"
                target="_blank"
                target="_blank"
              >
                <FaInstagram className="insta"> </FaInstagram>
              </a>
            </Fragment>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
