import React from "react";
import Slider from "./swiper";

// imprt image
import circle from "../../../materials/drawing/comments_circle.svg";
import radio from "../../../materials/Button/radio_icon.svg";
import podcast from "../../../materials/Button/podcast_icon.svg";


  const words = {
  1: <span className="textS"><i className="word-focus">"I have focused on the physicality of my condition. </i> <br/>I have focused on my thought patterns, and <br />I have focused on forging deeper relationships <br />with my family and friends.”</span>,
  2: <span>“It’s all in the way in which we react to having Parkinson’s disease: we can pretend that we don’t have a chronic, progressive disease for which there is no cure - which is exhausting to sustain - <i>or we can confront it and try and live</i> our best<i> lives with it.”</i></span>,
  3: <span><i>I have come to appreciate life as it unfolds in the present. </i>I remember and enjoy the past, but I don’t try to predict and live my life in the future. Life will not show up as you predict. Live your life as fully as you can in every aspect. Live your life today like you received bad news yesterday. A diagnosis may not mean the beginning of the end – it could be the beginning of a more meaningful chapter in you own Book of Life. ”</span>,
  4: <span>“<i>Parkinson’s </i>has taken my place on the couch – like that old friend who says he is only staying for a few days, but hangs around for a while. It is part of my life but it no longer controls me. More importantly, it doesn’t define me.”</span>,
  5: <span><i>My life changed dramatically </i>when I was diagnosed. But, in many respects it has changed for the good. Today, I am living more mindfully in the present, surrounding myself with loving and understanding friends, and family. I have accepted Parkinson’s into my life.”</span>
  }
 
const Comments = (props) => {
  const settings = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 60, // Stretch space between slides (in px)
      depth: 200, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false // Enables slides shadows
    }
  };
  const settingsM = {
    slidesPerView: 3,
    spaceBetween: 10,
    coverflowEffect: {
      rotate: 0,
      stretch: 5,
      depth: 300,
      modifier: 1,
      slideShadows: false
    }
  };
  const settingsS = {
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0, 
      stretch: 5, 
      depth: 200, 
      modifier: 1, 
      slideShadows: false
    }
  };
  const {wordsRef} = props;

  return (
    <>
    <div id="Words" ref={wordsRef}>
    <div className="hp-comments-pageStyle" id="comments" >
    {/* for PC size screen */}
      <div className="content sizeXl">
        <div className="content-box left">
          <p className="text">{words['1']}</p>
          <p className="text">{words['4']}</p>
          <p className="text">{words['5']}</p>
        </div>
        <div className="content-box right">
          <p className="text">{words['3']}</p>
          <p className="text">{words['2']}</p>
          <a href= 'https://www.voiceamerica.com/episode/124546/share-your-story-larry-linton-on-thriving-with-parkinson-disease' target="_blank" rel="noopener noreferrer">
            <img className="button button-pc" src={radio} alt="radio" />
          </a>
          <a href= 'https://www.neurorev.com/podcast' target="_blank" rel="noopener noreferrer">
            <img className="button button-pc" src={podcast} alt="podcast" />
          </a>
        </div>
      </div>
      
    {/* for Tablet Large size screen */}
      <div className="sliderSection sizeL" >
        <img className="circle" src={circle} alt="circle" />
        <Slider settings={settings}>
          {Object.keys(words).map(key => (
            <div className="box" key={key}>
            <p className="text">{words[key]}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="buttons-L sizeL">
        <a href= 'https://www.voiceamerica.com/episode/124546/share-your-story-larry-linton-on-thriving-with-parkinson-disease' target="_blank" rel="noopener noreferrer">
          <img className="button button-L radio" src={radio} alt="podcast" />
        </a>
        <a href= 'https://www.neurorev.com/podcast' target="_blank" rel="noopener noreferrer">
          <img className="button button-L" src={podcast} alt="podcast" />
        </a>
      </div>
      {/* for Tablet Midium size screen */}
      <div className="sliderSection sizeM" >
        <img className="circle" src={circle} alt="circle" />
        <Slider settings={settingsM}>
          {Object.keys(words).map(key => (
            <div className="box" key={key}>
            <p className="text">{words[key]}</p>
            </div>
          ))}
        </Slider>
        <a href= 'https://www.voiceamerica.com/episode/124546/share-your-story-larry-linton-on-thriving-with-parkinson-disease' target="_blank" rel="noopener noreferrer">
          <img className="button radio button-M" src={radio} alt="radio" />
        </a>
        <a href= 'https://www.neurorev.com/podcast' target="_blank" rel="noopener noreferrer">
          <img className="button podcast button-M" src={podcast} alt="podcast" />
        </a>
      </div>

      {/* for smart phone size screen */}
      <div className="sliderSection sizeS" >
        <Slider settings={settingsS}>
          {Object.keys(words).map(key => (
            <div className="box" key={key}>
            <p className="text">{words[key]}</p>
            </div>
          ))}
        </Slider>
        <div className="buttons-sp">
          <a href= 'https://www.voiceamerica.com/episode/124546/share-your-story-larry-linton-on-thriving-with-parkinson-disease' target="_blank" rel="noopener noreferrer">
            <img className="button button-sp" src={radio} alt="radio" />
          </a>
          <a href= 'https://www.neurorev.com/podcast' target="_blank" rel="noopener noreferrer">
            <img className="button button-sp" src={podcast} alt="podcast" />
          </a>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Comments;
