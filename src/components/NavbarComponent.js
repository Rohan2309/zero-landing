import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default class NavbarComponent extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <div>
        <nav className="nav z-depth-0">
          <div className="nav-wrapper">
            <a href="#logo" className="brand-logo #2196f3 blue-text ">
              ZERO
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a
                  href="#home"
                  className="btn btn-nav transparent z-depth-0 #2196f3 blue-text "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1 "
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1 "
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <a href="#menu" data-target="slide-out" className="sidenav-trigger">
              <i className="#2196f3 blue-text  material-icons">menu</i>
            </a>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <a
              href="#home"
              className="btn btn-nav transparent z-depth-0 #2196f3 blue-text "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1 "
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="btn btn-nav transparent z-depth-0 white-text text-darken-4 #2196f3 blue darken-1"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
