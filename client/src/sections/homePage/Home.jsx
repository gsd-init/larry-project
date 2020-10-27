import React from "react";
import FButton from "../../materials/SNS_icon/Facebook_White.svg";
import TButton from "../../materials/SNS_icon/Twitter_White.svg";

const Home = (props) => {
  const { homeRef } = props;
  return (
    <>
      <div id="home" ref={homeRef}>
        <div className="hp-home">
          <div className="bg-dark"></div>
          <div className="bg-orange"></div>

          <div className="name">
            <h1>Larry </h1>
            <h1> Linton</h1>
          </div>
          <div className="hp-home-icon-box">
            <a href="https://www.facebook.com/lintonwellness/" target="_blank" rel="noopener noreferrer" >
              <img className="hp-home-icon" src={FButton} alt="faceBook" />
            </a>
            <a href="https://twitter.com/linton_to" target="_blank" rel="noopener noreferrer" >
              <img className="hp-home-icon" src={TButton} alt="faceBook" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
