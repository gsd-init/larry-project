import React from "react";
import "../styles/style.scss";
import Top from "../sections/landingPage/Top";
import BookCover from "../sections/landingPage/BookCover";
import BookTrailer from "../sections/landingPage/bookTrailer/BookTrailer";
import Footer from "../sections/landingPage/Footer";
import Navigation from "../sections/landingPage/nav/Navigation";
import { useSwitchHeader } from "../components/useSwitchHeader";

const BookLandingPage = () => {
  const {
    visibleSection,
    headerRef,
    topOrangeRef,
    aboutOrangeRef,
    contactOrangeRef,
  } = useSwitchHeader();

  return (
    <>
      <Navigation headerRef={headerRef} visibleSection={visibleSection} />
      <Top topOrangeRef={topOrangeRef} />
      <BookCover aboutOrangeRef={aboutOrangeRef} />
      <BookTrailer />
      <Footer contactOrangeRef={contactOrangeRef} />
    </>
  );
};
export default BookLandingPage;
