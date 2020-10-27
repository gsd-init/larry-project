import React from "react";

import Home from "../sections/homePage/Home";
import About from "../sections/homePage/About";
import News from "../sections/homePage/News";
import BookAndPub from "../sections/homePage/BookAndPub";
import Comments from "../sections/homePage/comments/Comments";
import Footer from "../sections/homePage/Footer";
import { useSwitchHeader } from "../components/useSwitchHeader";
import Nav from "../sections/homePage/nav/Nav";

const HomePage = () => {
  const {
    visibleSection,
    scrollTo,
    headerRef,
    homeRef,
    aboutRef,
    newsRef,
    bpRef,
    wordsRef,
    contactRef,
  } = useSwitchHeader();

  return (
    <>
      <Nav
        headerRef={headerRef}
        visibleSection={visibleSection}
        homeRef={homeRef}
        scrollTo={scrollTo}
        aboutRef={aboutRef}
        newsRef={newsRef}
        bpRef={bpRef}
        wordsRef={wordsRef}
        contactRef={contactRef}
      />

      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <News newsRef={newsRef} />
      <BookAndPub bpRef={bpRef} />
      <Comments wordsRef={wordsRef} />
      <Footer contactRef={contactRef} />
    </>
  );
};

export default HomePage;
