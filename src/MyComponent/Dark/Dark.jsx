import React from "react";
import "./Dark.css";

const Dark = () => {
  return (
    <React.Fragment>
      <section className="dark-outer-container pt-5 pb-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="dark-logo-container">
                <a className="navbar-brand text-white" href="#">
                  LOGO HERE
                </a>
                <p className="my-2">
                  It is a long established fact that a reader will be distracted
                  by thelt is a long established fact that..
                  <span className="more-container more">more </span>
                </p>
                <div className="social-icon-container">
                  <ion-icon
                    name="logo-facebook"
                    className="social-logo"
                  ></ion-icon>
                  <ion-icon
                    name="logo-twitter"
                    className="bg-white text-dark rounded-circle"
                  ></ion-icon>
                  <ion-icon
                    name="logo-google"
                    className="bg-white text-dark rounded-circle"
                  ></ion-icon>
                  <ion-icon
                    name="logo-instagram"
                    className="bg-white text-dark rounded-circle"
                  ></ion-icon>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="links-container my-2">
                <h6 className="font-weight-bold">Quicklinks</h6>
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>Teachers</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="links-container">
                <h6 className="font-weight-bold">Contact Us</h6>
                <ul className="list-unstyled">
                  <li>+91 987654322</li>
                  <li>Info@loremipsum.com</li>
                  <li>dshasdh, shadfdf, sjjdsj, sdfsdfjsjf - 673632</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="links-container">
                <h6 className="font-weight-bold">Our Policy</h6>
                <ul className="list-unstyled">
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Faqs</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dark;
