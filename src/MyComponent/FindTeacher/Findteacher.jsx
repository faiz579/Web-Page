import React, { useContext } from "react";
import "./Findteacher.css";
import { HomeContext } from "../../Context/homeContext";

const Findteacher = () => {
  const { theme, setTheme } = useContext(HomeContext);

  return (
    <React.Fragment>
      <section className="lorem-outer-container pt-5 pb-5">
        <div className="container">
          <h6 className="text text-center text-muted my-3">
            LOREM IPSUM LOREM IPSUM
          </h6>
          <div className="hr-container d-flex align-items-center">
            <hr />
            <h6>Find Teachers By Subject</h6>
            <hr />
          </div>
          <div className="box-outer-container">
            <div className="container">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <div className="box text-muted d-flex align-items-center">
                    <img
                      src="./images/feature-1.png"
                      alt=""
                      className="feature-img"
                    />
                    <div className="maths-container">
                      <h6>Mathematical</h6>
                      <p className="math-para">55 Teachers</p>
                    </div>
                  </div>
                </div>
                <div className="col 6 col-lg-3">
                  <div className="box text-muted d-flex align-items-center">
                    <img
                      src="./images/feature-2.png"
                      alt=""
                      className="feature-img"
                    />
                    <div className="maths-container">
                      <h6>Subject Name</h6>
                      <p className="math-para">46 Teachers</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="box text-muted d-flex align-items-center">
                    <img
                      src="./images/feature-3.png"
                      alt=""
                      className="feature-img"
                    />
                    <div className="maths-container">
                      <h6>Translation</h6>
                      <p className="math-para">68 Teachers</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="box text-muted d-flex align-items-center">
                    <img
                      src="./images/feature-4.png"
                      alt=""
                      className="feature-img"
                    />
                    <div className="maths-container">
                      <h6>Chemistry</h6>
                      <p className="math-para">88 Teachers</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="box text-muted d-flex align-items-center">
                    <img
                      src="./images/feature-5.png"
                      alt=""
                      className="feature-img"
                    />
                    <div className="maths-container">
                      <h6>Multimedia</h6>
                      <p className="math-para">35 Teachers</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="box text-muted d-flex align-items-center">
                    <img
                      src="./images/feature-6.png"
                      alt=""
                      className="feature-img"
                    />
                    <div className="maths-container">
                      <h6>Data Science</h6>
                      <p className="math-para">66 Teachers</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="box text-muted d-flex align-items-center">
                    <img
                      src="./images/feature-7.png"
                      alt=""
                      className="feature-img"
                    />
                    <div className="maths-container">
                      <h6>Machine Learning</h6>
                      <p className="math-para">95 Teachers</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="box text-muted d-flex align-items-center">
                    <img
                      src="./images/feature-8.png"
                      alt=""
                      className="feature-img"
                    />
                    <div className="maths-container">
                      <h6>Subject Name</h6>
                      <p className="math-para">80 Teachers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Findteacher;
