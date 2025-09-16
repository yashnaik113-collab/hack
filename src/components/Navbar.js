import React from "react";
import { Link } from "react-router-dom"; // ✅ React Router link



const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const handleMouseOver = (e) => {
    e.target.style.color = "orange";
  };

  const handleMouseOut = (e) => {
    e.target.style.color = "black";
  };

  return (
    <header
      style={{
    
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 0",
        width: "100%",
        boxShadow: "0px 3px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
      }}
    >
      {/* ✅ Logo links to Homepage */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
       
            alt="MealsOnTheWay Logo"
            style={{
              height: "250px",
              width: "auto",
              cursor: "pointer",
              transition: "transform 0.3s ease", // hover effect
            }}
          />
        </Link>
      </div>

      {/* ✅ Navigation Links */}
      <nav style={{ marginTop: "5px" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px",
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            <Link
              to="/about"
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/corporates"
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              For Corporates
            </Link>
          </li>
          <li>
            <Link
              to="/joinus" // ✅ Fixed here
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Join Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
