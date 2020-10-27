import React, { useRef, useEffect, useState } from 'react';
// import img
import larry3 from "../../materials/picture/ProfileLarry.png";
import send from "../../materials/Button/sendButton_Dark.svg";
import fbIcon from "../../materials/SNS_icon/Facebook_White.svg";
import twitterIcon from "../../materials/SNS_icon/Twitter_White.svg";
// constants
const thanksMsg = "Thanks for signing up!!";
const fbUrl = "https://www.facebook.com/lintonwellness/";
const twtterUrl = "https://twitter.com/lintonto";
const textP = "Want to hear more from me?";
const email = "larry@LiveWellWithPD.com";
const phoneNum = "(416) 710 6546";

const Footer = (props) => {
  const [didSuccess, setDidSuccess] = useState(false);
  const footer = useRef(null);

  useEffect(() => {
    let urlParamStr = window.location.search;
    let params = {};

    if (urlParamStr) {
      urlParamStr = urlParamStr.substring(1);
      urlParamStr.split('&').forEach( param => {
        const temp = param.split('=');
        params = {
          ...params,
          [temp[0]]: temp[1]
        }
      });
    }
    // when user subscript succesfully 
    if (params.success === 'true') {
      // switch the message
      setDidSuccess(true);
      // for anchor link
      footer.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  },[]);
  return (
    <div id="ContactOrange" ref={props.contactOrangeRef}>
    <div className="footer-pageStyle" id="footer" ref={footer}>

      <div className="row">
      <img className="larry-pic" src={larry3} alt="profile pics" />
      <p>{textP}</p>
      {didSuccess ? (
         <p className="thxMsg">{thanksMsg}</p>
        ) : (
          <form 
          action="https://www.aweber.com/scripts/addlead.pl" 
          method="post"> 
            <input type="hidden" name="listname" value="awlist5463417" />
            <input type="hidden" name="redirect" value="http://livewellwithpd.com/book?success=true" />
            <input type="hidden" name="meta_adtracking" value="custom form" />
            <input type="hidden" name="meta_message" value="1" /> 
            <input type="hidden" name="meta_required" value="email" /> 
            <input type="hidden" name="meta_forward_vars" value="1" /> 
            <input type="text" name="email" placeholder="Enter your E-mail" /> 
            <input type="image" className="send-button" src={send} alt="send-button" />
          </form>
       )}
      <p className="logo logo-white">Larry Linton</p>
      <div className="info">
      <p>{email}</p>
      <p>{phoneNum}</p>
      </div>
      <div className="icons">
        <a href={fbUrl} target="_blank" rel="noopener noreferrer">
          <img className="fb-icon icon" src={fbIcon} alt="facebook icon" />
        </a>
        <a href={twtterUrl} target="_blank" rel="noopener noreferrer">
          <img className="icon" src={twitterIcon} alt="facebook icon" />
        </a>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;