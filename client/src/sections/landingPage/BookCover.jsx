import React from "react";
import bookcover from "../../materials/picture/BookCoverFlat.png";
import halfcircles from "../../materials/drawing/bookCover_HalfCircle.png";
import ReadMore from "../../materials/Button/DownloadButton.svg";

const BookCover = (props) => {
  return (
    <>
      <div id="book-cover">
        <div
          className="about-upperOrange"
          id="AboutOrange"
          ref={props.aboutOrangeRef}></div>
        <div className="img-wrapper">
          <div className="half-circles-wrapper">
            <img className="half-circles" src={halfcircles} alt="half-circle" />

            <img className="bookcover" src={bookcover} alt="Book Cover" />
            <img className="half-circles" src={halfcircles} alt="half-circle" />
          </div>
          <hr className="cover-line" />
        </div>
        <div className="cover-text">
          <p>
            “Parkinson’s disease presented me with the time and the opportunity
            to reinvent myself physically and emotionally. That has brought a
            higher sense of meaning to my life. I have a clear purpose and that
            is to live my best and authentic life with Parkinson’s disease and
            to inspire others to do the same, too.”
          </p>
        </div>

        <div className="cover-button">
          <div className="cover-readmore">
            <a
              className="cover-readmore"
              href="https://assets.booklocker.com/pdfs/11049s.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <p>Read More</p>
              <img className="readmore-img" src={ReadMore} alt="read-more" />
            </a>
          </div>
          <a
            href="https://booklocker.com/books/11049.html"
            target="_blank"
            rel="noopener noreferrer" 
            className="buy-button">
            <button className="buy-button">BUY BOOK</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default BookCover;
