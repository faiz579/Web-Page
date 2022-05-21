import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <React.Fragment>
      <div className="container-background">
        <div className="container  text-container d-flex">
          <div className="doubts text-white text-center text-md-left ">
            <h2>Get your doubts solved</h2>
            <p className="paragraph text-white text-center text-md-left">
              Tap to snap a picture and find the solution
            </p>
            <div className="search-bar d-flex border-0 bg-light mx-auto mx-md-0">
              <div className="container-upload ">
                <img
                  className="upload-img"
                  src="./images/upload.png"
                  alt=""
                ></img>
                <button className="upload border-0 text-white">UPLOAD</button>
              </div>
              <input
                className="mr-sm-2 border-0 bg-light d-flex "
                type="search"
                placeholder="type your question here"
                aria-label="Search"
              ></input>
              <div className="container-search-ico">
                <img
                  className="search-icon btn bg-light my-2"
                  src="./images/search-icon.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Background;
