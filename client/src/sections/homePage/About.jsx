import React from "react";
import fbIcon from "../../materials/SNS_icon/Facebook_navy.svg";
import twitterIcon from "../../materials/SNS_icon/Twitter_navy.svg";
import background from "../../materials/SNS_icon/Profile_art.svg";

const fbUrl = "https://www.facebook.com/lintonwellness/";
const twtterUrl = "https://twitter.com/lintonto";
const text ="I was progressing steadily through my career as a corporate immigration lawyer when I came face-to-face with a life altering diagnosis of Parkinson’s disease in 2012. Despite the seriousness of the disease, I have reinvented himself emotionally and physically to live a life with Parkinson’s disease that, in many respects, is more rewarding, fulfilling and meaningful after my diagnosis, than before. By sharing my life lived so far and the coping skills that I have developed to deal with the motor and non-motor symptoms of the disease, my hope is to inspire others faced with a chronic illness or life changing event to live their best and most authentic lives, too.";

const About = (props) => {
  const { aboutRef } = props;
  return (
    <>
      <div id="about" ref={aboutRef} className="About">
        <div className="about-wrapper">
          <div className="Title">
            <h1 className="MainTitle">Larry Linton</h1>
            <img className="backgroundImg" src={background} alt="" />
          </div>
          <div className="Text">
            <p>{text}</p>
          </div>
        </div>
        <div className="social-media-icons">
          <a href={fbUrl} target="_blank" rel="noopener noreferrer">
            <img src={fbIcon} className="fb-icon" alt="facebook icon" />
          </a>
          <a href={twtterUrl} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} className="twitter-icon" alt="facebook icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
