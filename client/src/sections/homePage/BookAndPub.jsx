import React from "react";
import letter from "../../materials/Background/text_bookAndPub.svg";
import downloadButton from "../../materials/Button/get_ a_copy_icon.png";

const BookAndPub = (props) => {
  const { bpRef } = props;
  return (
    <>
      <div className="hp-bp" id="book-publication" ref={bpRef}>
        <div className="Bp">
          <div className="image-wrapper">
            <img src={letter} alt="" />
          </div>

        <div className="hp-download-wrap">
          <a href="/book">
            <img src={downloadButton} alt="download link" />
          </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default BookAndPub;
