import React, { useState, useEffect } from "react";
import { Backtotop } from "./CryptoStyles";
const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <>{showButton && <Backtotop onClick={scrollToTop}>&#8673;</Backtotop>}</>
    </div>
  );
};

export default BackToTop;
