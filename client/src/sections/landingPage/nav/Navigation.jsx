import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import SideNav from "./SideNav";

const Navigation = (props) => {
  const { headerRef, visibleSection } = props;
  useEffect(() => {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }, []);

  const selected = () => {
    if (
      visibleSection === "TopOrange" ||
      visibleSection === "AboutOrange" ||
      visibleSection === "ContactOrange"
    ) {
      return "selected";
    } else {
      return "";
    }
  };
  return (
    <>
      <div className="header-style" ref={headerRef}>
        <div className={`header-inside ${selected()}`}>
          <a href="#!" className="sidenav-trigger" data-target="slide-out">
            <i className="material-icons">menu</i>
          </a>
          <div className="top-title">
            <a href="#!" className="top-header">
              Larry Linton
            </a>
          </div>
        </div>
      </div>
      <SideNav />
    </>
  );
};

export default Navigation;
