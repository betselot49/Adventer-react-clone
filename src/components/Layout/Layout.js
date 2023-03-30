import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import logo from "../../images/logo.png";
import Axios from "axios";
import { useState } from "react";
import React from "react";

const Layout = () => {
  const [quote, setQuote] = useState(
    "In exchange for gaining strength, have I lost something more important as a human being? Emotions used to swirl within me when I fought. Fear, impatience, anger... But now... Day after day, after one punch I go home unharmed and wash my gloves."
  );

  const getQuote = () => {
    Axios.get("https://animechan.vercel.app/api/random").then((res) => {
      setQuote(res.data.quote);
    });
  };

  return (
    <>
      <div class="banner-header">
        <div class="bg-image">
          <div class="header">
            <div class="logo">
              <img src={logo} alt="Logo" />
              <Link className="login" to="/login">
                Login
              </Link>
              <Link className="sign-up" to="/sign-up">
                Sign up
              </Link>
            </div>
            <div class="menu-main">
              <Link className="nav-item" to="/">
                HOME
              </Link>
              <Link className="nav-item" to="/about">
                ABOUT
              </Link>
              <Link className="nav-item" to="/service">
                SERVICE
              </Link>
              <Link className="nav-item" to="/blog">
                BLOG
              </Link>
              <Link className="nav-item" to="/contact">
                CONTACT US
              </Link>
            </div>
          </div>
          <div class="slider-container">
            <div class="slider">
              <h1 class="adventure">ADVENTURE</h1>
              <div class="adv-text">
                <p class="adv-text-item">{quote}</p>
              </div>
              <div class="read_div">
                <button onClick={getQuote} class="read_btn" href="#">
                  Get a Qoute
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
