import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);

    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo.png"
          style={{ width: "100px", height: "60px", marginTop: "10px" }}
          alt="August Logo"
        />
      );
    } else if (logo === "dark") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
    } else if (logo === "symbol-dark") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
    } else if (logo === "symbol-light") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
    } else {
      logoUrl = (
        <img
          src="/assets/images/logo/logo.png"
          style={{ width: "100px", height: "60px", marginTop: "10px" }}
          alt="Digital Agency"
        />
      );
    }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li className="has-droupdown">
                  <Link to="#pages">Portfolio</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/digitaldrawing">Digital Art</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details">Photography</Link>
                    </li>
                    <li>
                      <Link to="/productdesign">Product Design</Link>
                    </li>
                  </ul>
                </li>

                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
              </ul>
            </nav>
            <div className="header-btn">
              <a className="rn-btn" href="/contact">
                <span>Contact</span>
              </a>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
