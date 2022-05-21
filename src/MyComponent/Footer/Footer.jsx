import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <section className="footer-container pt-3 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="footer-txt text-center">
                <p>All Right Reserved | Company Name 2021</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="footer-img text-center">
                <img src="./images/paymentmode.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
