import React from "react";
import moment from "moment";
import "../../../styles/homePage/_hp-news.scss";

const SliderItemsHorizontal = ({ post, index }) => {
  const displayItemDate = moment(post.sys.createdAt).format("MMMM, DD YYYY");
  return (
    <div key={index} className="slide-item">
      <div className="slide-item-date">{displayItemDate}</div>
      <h3 className="slide-item-title">
        {!post.fields.title || post.fields.title === undefined
          ? "loading..."
          : post.fields.title.substring(0, 50) + "..."}
      </h3>
      <div className="carousel-hr-parent ">
        <hr className="all-hr" />
      </div>
      <div className="slide-item-article-text">
        <div className="article-1">
          <p>
            {!post.fields.contents || post.fields.contents === undefined
              ? "loading..."
              : post.fields.contents.substring(0, 300) + "..."}
          </p>
        </div>
      </div>
      <a
        className="slide-item-readmore"
        href={
          post.fields.sourceLink === undefined ? "!#" : post.fields.sourceLink
        }
        target="_blank"
        rel="noopener noreferrer" 
      >
        Read more
      </a>
    </div>
  );
};

export default SliderItemsHorizontal;
