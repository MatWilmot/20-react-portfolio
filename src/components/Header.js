import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const Header = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div>
      <nav className="grey lighten-5">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo grey-text text-darken-3">
            Mat Wilmot
          </Link>
          <a
            data-target="mobile-demo"
            className="sidenav-trigger grey-text text-darken-3"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about" className="grey-text text-darken-3">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" className="grey-text text-darken-3">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/about" className="grey-text text-darken-3">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" className="grey-text text-darken-3">
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
