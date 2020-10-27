import { useState, useEffect, useRef } from "react";

export const useSwitchHeader = () => {
  const [visibleSection, setVisibleSection] = useState();
  const headerRef = useRef(null);
  const topOrangeRef = useRef(null);
  const aboutOrangeRef = useRef(null);
  const contactOrangeRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const newsRef = useRef(null);
  const bpRef = useRef(null);
  const wordsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "TopOrange", ref: topOrangeRef },
    { section: "AboutOrange", ref: aboutOrangeRef },
    { section: "ContactOrange", ref: contactOrangeRef },
    { section: "home", ref: homeRef },
    { section: "about", ref: aboutRef },
    { section: "news", ref: newsRef },
    { section: "book-publication", ref: bpRef },
    { section: "words-radio", ref: wordsRef },
    { section: "contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return ele;
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection, sectionRefs]);

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return {
    visibleSection,
    scrollTo,
    headerRef,
    topOrangeRef,
    aboutOrangeRef,
    contactOrangeRef,
    homeRef,
    aboutRef,
    newsRef,
    bpRef,
    wordsRef,
    contactRef,
  };
};
