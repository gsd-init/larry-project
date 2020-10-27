
import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Slider = ({ settings, children }) => {
  const params = {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    autoplay: {
			delay: 4000
		},
    ...settings
  };

  return <Swiper {...params}>{children}</Swiper>;
};

export default Slider;
