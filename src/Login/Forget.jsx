import React from "react";

import "./Login.css";
const Login = () => {
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
            <h2 className="text-center mt-2">Forget Password</h2>
            <form className="ng-pristine ng-valid mt-3">
              <div className="form-content">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-underline input-lg"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-info btn-lg ">Send Link</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
