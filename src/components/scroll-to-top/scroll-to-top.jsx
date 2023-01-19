import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function ScrollToTop({ height }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: height,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
ScrollToTop.propTypes = {
  height: PropTypes.number.isRequired,
};
export default ScrollToTop;
