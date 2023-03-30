import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="row font-family-sans-serif">
          <div className="logo col-md-6">
            <Link to="/">
              <img
                src="images/metalplateBro.png"
                alt="Logo"
                className="logoimg"
              />
            </Link>
          </div>
          <div className="col-md-6 mt-3">
            <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink to="/" className="nav-link text-white">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/brocamp" className="nav-link text-white">
                        BroCamp
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/learning" className="nav-link text-white">
                        Learning Club
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/community" className="nav-link text-white">
                        Community
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/arcade" className="nav-link text-white">
                        Arcade
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/announcements" className="nav-link text-white">
                        Announcement
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/career" className="nav-link text-white">
                        Careers
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown" >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Profile
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" to="/login" >
                            Signin
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/">
                            Signout
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/register">
                            Register
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header