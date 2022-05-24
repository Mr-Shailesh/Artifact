import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleSignIn } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      nav("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      nav("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5"> Welcome to ArtiFact</h1>
      <div className="container bootstrap snippets bootdey">
        <div className="row login-page">
          <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
            <div className="image mt-2">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                className="user-avatar img-thumbnail"
                alt="pic"
              />
            </div>
            <h2 className="text-center mt-2">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <form onSubmit={handleSubmit} className="ng-pristine ng-valid mt-3">
              <div className="form-content">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-underline input-lg"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control input-underline input-lg"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Link to="/forget">Forget Password</Link>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-info btn-lg">
                  Log in
                </button>

                <Link to="/signup">
                  <button className="btn btn-info btn-lg">Register</button>
                </Link>
                <GoogleButton
                  className="g-btn mt-2"
                  type="dark"
                  onClick={handleGoogleSignIn}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
