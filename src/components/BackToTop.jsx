import React, { useState, useEffect } from "react";
import { Backtotop } from "../pages/CryptoComponents/CryptoStyles";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
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
    <>
      {showButton && (
        <Backtotop onClick={scrollToTop}>
          <BsFillArrowUpCircleFill size={35} />
        </Backtotop>
      )}
    </>
  );
};

export default BackToTop;
