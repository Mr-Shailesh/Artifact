import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../Images/logo.png";
import { useUserAuth } from "../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  const { logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      nav("/login");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <Link className="navbar-brand" to="/home">
          <img
            className="rounded-circle"
            src={img}
            width="30"
            height="30"
            alt="logo"
          />
          ArtiFact
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-4"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="avatar">
          <div className="collapse navbar-collapse" id="navbar-list-4">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                    width="40"
                    height="40"
                    className="rounded-circle"
                    alt="photos"
                  />
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/home">
                    Dashboard
                  </Link>
                  <Link className="dropdown-item" to="/profile">
                    Edit Profile
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={handleLogOut}
                    to="/login"
                  >
                    Log Out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
