import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Icon from "../../../materials/Button/ReturnButton.svg";

const Nav = (props) => {
  const {
    headerRef,
    visibleSection,
    homeRef,
    scrollTo,
    aboutRef,
    newsRef,
    bpRef,
    wordsRef,
    contactRef,
  } = props;

  const navList = [
    {
      title: "HOME",
      ref: homeRef,
    },
    {
      title: "ABOUT",
      ref: aboutRef,
    },
    {
      title: "NEWS",
      ref: newsRef,
    },
    {
      title: "BOOK & PUBLICATION",
      ref: bpRef,
    },
    {
      title: "WORDS & RADIO",
      ref: wordsRef,
    },
    {
      title: "CONTACT",
      ref: contactRef,
    },
  ];
  useEffect(() => {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }, []);

  //the left nav color
  const menuColor = () => {
    switch (visibleSection) {
      case "home":
        return "h-orange";
      case "about":
        return "h-dark";
      case "words-radio":
        return "h-orange";
      case "news":
        return "h-dark";
      case "book-publication":
        return "h-orange";
      case "contact":
        return "h-orange";
      default:
        return "";
    }
  };

  //the right nav color
  const navcolor = () => {
    switch (visibleSection) {
      case "home":
        return "h-dark";
      case "about":
        return "h-dark";
      case "words-radio":
        return "h-orange";
      case "news":
        return "h-dark";
      case "book-publication":
        return "h-orange";
      case "contact":
        return "h-orange";
      default:
        return "";
    }
  };
  
  //header background color
  const headerBGColor =()=>{
    if(visibleSection==="book-publication"){
      return  "pub-bg"
    }else{
      return "transparent z-depth-0"
    }
  }
  
const toSideTitle=(str)=> {
return str
    .toLowerCase()
    .split(' ')
    .map((word)=> {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
 }
 
const toIdName =(str)=>{
  return str.toLowerCase().replace(/[&]/,"-").split(" ").join("")
}

  return (
    <>
      <div className="hp-header-style">
        <div className="header" ref={headerRef}>
    
        <nav className={`${headerBGColor()}`}>
         
          <div className="nav-wrapper pub-bg">
            <a href="#!" className={`brand-logo `}>
              <div
                className={`mobile-position ${menuColor()} hide-on-med-and-down`}>
                Larry Linton
              </div>
            </a>
            <a href="#!" data-target="slide-out" className="sidenav-trigger">
              <i className={`material-icons ${menuColor()}`}>menu</i>
            </a>
            <div className="hp-menu-wrapper hp-hidden-tab-and-up">
              <div className={`hp-right ${navcolor()}`}>Larry Linton</div>
            </div>
            <ul className="right hide-on-med-and-down">
              {navList.map((item) => (
                  <li key={item.title}>
                    <a 
                      href="#!"
                      className={`header_link ${navcolor()} ${
                        visibleSection === toIdName(item.title)
                          ? "selected-" + navcolor()
                          : ""
                      }`}
                      onClick={() => {
                        scrollTo(item.ref.current);
                      }}>
                      {item.title}
                    </a>
                  </li>
              ))}
            </ul>
          </div>
          </nav>
        
      </div>
      </div>
      <div className="hp-header-sidenav">
        <ul className="sidenav" id="slide-out" draggable={true}>
            {navList.map((item) => (
          <li className="nav-list" key={item.title}>          
              <a key={item.title}
                href="#!"
                onClick={() => {
                        scrollTo(item.ref.current);
                      }}
                      className="sidenav-close">{toSideTitle(item.title)}</a>
          </li>
            ))}
          <a className="sidenav-close close-icon" href="#!">
            <img src={Icon} alt="close" />
          </a>
        </ul>
        </div>
    </>
  );
};

export default Nav;
