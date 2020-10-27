import React from "react";

import Book from "../../materials/picture/BookCover.png";
import LButton from "../../materials/Button/BuyButton_L.svg";
import SButton from "../../materials/Button/BuyButton_S_M_3.svg";
import FButton from "../../materials/SNS_icon/Facebook_White.svg";
import TButton from "../../materials/SNS_icon/Twitter_White.svg";

const Top = (props) => {
  return (
    <>
      <div className="top-pageStyle" id="home">
        <div className="top-container">
          <div className="top-left" id="TopOrange" ref={props.topOrangeRef}>
            <div className="text">
              <div className="h1-flex">
                <h1>SHAKEN, </h1>
                <h1> NOT STIRRED</h1>
              </div>
              <p>LIVING WITH PARKINSON'S DISEASE</p>
            </div>
          </div>

          <div className="top-right">
            <div className="top-center-box">
              <div className="top-img">
                <img src={Book} alt="book" />
              </div>
              <div className="hidden-mob">
                <a
                  href="https://booklocker.com/books/11049.html"
                  target="_blank" rel="noopener noreferrer" >
                  <img src={LButton} alt="" />
                </a>
              </div>
              <div className="hidden-tab">
                <a
                  href="https://booklocker.com/books/11049.html"
                  target="_blank" rel="noopener noreferrer" >
                  <img src={SButton} alt="" />
                </a>
              </div>
            </div>

            <div className="top-icon-box">
              <a
                href="https://www.facebook.com/lintonwellness/"
                target="_blank" rel="noopener noreferrer" >
                <img className="top-icon" src={FButton} alt="faceBook" />
              </a>
              <a href="https://twitter.com/linton_to" target="_blank" rel="noopener noreferrer" >
                <img className="top-icon" src={TButton} alt="faceBook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
