import React from "react";
import "./QuickContainer.css";

const QuickContainer = () => {
  return (
    <React.Fragment>
      <section className="box-outer-container pt-5 pb-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="box-container">
                <div className="icon-container d-flex mx-auto">
                  <img src="./images/icon-1.png" alt="" className="icon"></img>
                </div>
                <h2 className="heading">Quick Response</h2>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
            <div className=" col-12 col-lg-4">
              <div className="box-container">
                <div className="icon-container d-flex mx-auto">
                  <img src="./images/icon-2.png" alt="" className="icon"></img>
                </div>
                <h2 className="heading">Expert Teachers</h2>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
            <div className=" col-12 col-lg-4">
              <div className="box-container">
                <div className="icon-container d-flex mx-auto">
                  <img src="./images/icon-3.png" alt="" className="icon"></img>
                </div>
                <h2 className="heading">Easy Access</h2>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default QuickContainer;
