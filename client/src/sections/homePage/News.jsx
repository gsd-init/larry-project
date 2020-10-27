import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import * as contentful from "contentful";

import "../../styles/homePage/_hp-news.scss";

import fixedimage from "../../materials/newsImgs/title_pic@2x.png";
import arrowRight from "../../materials/newsImgs/Arrow.svg";
import arrowLeft from "../../materials/newsImgs/Arrow.svg";
import SliderItemsHorizontal from "./news-slider/SliderItemsHorizontal";

const News = (props) => {
  const { newsRef } = props;
  let slider = null;

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    height: 900,
    // nextArrow: true,
    // prevArrow: true
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
          initialSlide: 2,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: false,
        },
      },
    ],
  };

  // for contentful
  const [posts, setPosts] = useState([]);
  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_TOKEN,
  });
  useEffect(() => {
    fetchPosts().then((res) => {
      setPosts(res.items.slice(0, 10));
    });
  }, []);

  useEffect(() => console.log(posts), [posts]);
  const fetchPosts = () => client.getEntries();

  return (
    <div id="News" ref={newsRef}>
      <div className="news-container">
        <div className="news-content-wrapper">
          <div className="fixed-slide">
            <img src={fixedimage} alt="fixedimg" />
            <div className="mobile-only">
              <p>Latest news & updates</p>
            </div>
          </div>
          {posts.length > 0 && (
            <Slider
              ref={(c) => (slider = c)}
              {...settings}
              className="carousel"
            >
              {posts &&
                posts.map((post, index) => (
                  <SliderItemsHorizontal
                    key={post.sys.id}
                    index={index + 1}
                    post={post}
                  />
                ))}
            </Slider>
          )}

          <div className="buttons">
            <div className="previousBtn" onClick={previous}>
              <img src={arrowLeft} alt="arrowForward" />
            </div>
            <div className="forwardBtn" onClick={next}>
              <img src={arrowRight} alt="arrowForward" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
