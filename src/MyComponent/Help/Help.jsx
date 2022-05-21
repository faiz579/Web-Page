import React from "react";

const Help = () => {
  return (
    <React.Fragment>
      <section className="help-outer-container pt-5">
        <div className="container bg-white">
          <div className="row">
            <div className="col-lg-8">
              <div className="knowmore-heading my-5 my-lg-1">
                <h2>We help you achieve your goals.</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
                <button className="know-btn btn text-white">Get Started</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="help-img">
                <img
                  src="./images/image-3.png"
                  alt=""
                  className="img-fluid help-container-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Help;
