import React from "react";

const Sucess = () => {
  return (
    <React.Fragment>
      <section className="advance-outer-container pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="knowmore-heading text-white my-5 my-lg-1">
                <h2>Sucess Stories From Our Students!</h2>
                <p>
                  It's a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more
                </p>
                <button className="know-btn btn bg-light">Learn More</button>
              </div>
            </div>
            <div className="col-lg-4">
              <img src="./images/image-2.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sucess;
