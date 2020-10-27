import React from "react";
import Icon from "../../../materials/Button/ReturnButton.svg";

const SideNav = () => {

  return (
    <div className="header-sidenav">
    <div className="sidenav" id="slide-out" draggable={true}>
      <ul className="nav-list-wrapper">
        <li className="nav-list sidenav-close">
          <a href="#top">Home</a></li>
          <li className="nav-list sidenav-close"> <a href="#book-cover">About</a></li>
          <li className="nav-list sidenav-close"><a href="#trailer">Trailer</a></li>
          <li className="nav-list sidenav-close"> <a href="#footer">Contact</a></li>
          <li className="nav-list sidenav-close"><a href="/"><span className="white-text">Go Larry Website</span></a></li>
          <a className="sidenav-close" href="#!">
            <img src={Icon} alt="close" />
          </a>
      </ul>
    </div>
    </div>
  );
};

export default SideNav;
