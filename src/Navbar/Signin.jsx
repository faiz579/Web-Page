import React from "react";

const Signin = () => {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content container">
          <div className="modal-body">
            <h2>Sign In</h2>
            <p className="text-secondary">Welcome,</p>
            <input
              className="detail border-0"
              type="search"
              placeholder="example@abc.com"
              aria-label="Search"
            ></input>
            <hr></hr>
            <p className="text-secondary">Password</p>
            <input
              className="detail border-0"
              type="search"
              placeholder="Enter your password"
              aria-label="Search"
            ></input>
            <hr></hr>
            <div className="remember-container">
              <div className="remember-checkbox">
                <input type="checkbox" id="remember" name="remember"></input>
                <label className="text-secondary remember" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <p className="forgot ">Forgot Password?</p>
            </div>
            <button className="text-white signin-btn border-0">Sign In</button>
            <div className="continue-container d-flex align-items-center">
              <hr></hr> <p className="text-secondary">or continue with</p>{" "}
              <hr></hr>
            </div>
            <div className="social-btn d-flex justify-content-center">
              <button className="fb-btn border-0 text-white d-flex">
                Facebook
              </button>
              <button className="google-btn border-0 .bg-light">Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
