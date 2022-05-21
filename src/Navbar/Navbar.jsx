import React, { useContext } from "react";
import "./Navbar.css";
import Signin from "./Signin";
import { Link } from "react-router-dom";
import { HomeContext } from "../Context/homeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(HomeContext);
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light px-5">
        <a className="navbar-brand text-white" href="#">
          LOGO HERE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto d-flex align-items-center">
            <li className="nav-item active mx-auto">
              <Link
                style={theme ? { color: "#fff" } : { color: "#222" }}
                className="nav-link"
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mx-auto">
              <Link
                style={theme ? { color: "#fff" } : { color: "#222" }}
                className="nav-link"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item mx-auto">
              <Link
                style={theme ? { color: "#fff" } : { color: "#222" }}
                className="nav-link"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item mx-auto">
              <Link
                style={theme ? { color: "#fff" } : { color: "#222" }}
                className="nav-link"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item mx-auto">
              <Link
                style={theme ? { color: "#fff" } : { color: "#222" }}
                className="nav-link"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ion-icon className="" name="search"></ion-icon>
          <div className="button d-flex justify-content-center">
            <button
              type="button"
              className="btn text-white "
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Log In
            </button>
            <Signin />

            <button className="btn text-white">Get Started</button>
            <button
              className="btn text-white"
              onClick={() => {
                setTheme(!theme);
                console.log(theme);
              }}
            >
              {theme ? "light" : "dark"}
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

<nav className="navbar navbar-expand-lg navbar-light px-5">
  <a className="navbar-brand" href="#">
    LOGO HERE
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>;
