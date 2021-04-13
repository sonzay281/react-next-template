import { useState, useEffect } from "react";

const useWidth = (_) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.outerWidth : 920
  );

  useEffect(() => {
    window.addEventListener("resize", resetWidth);
    return () => {
      window.removeEventListener("resize", resetWidth);
    };
  }, [typeof window !== "undefined" && window.outerWidth]);

  const resetWidth = (_) =>
    setWidth(typeof window !== "undefined" ? window.outerWidth : 920);

  const data = { isMobile: false, isTablet: false, isDesktop: false };

  if (width <= device.PHONE) data.isMobile = true;
  else if (width <= device.TABLET) data.isTablet = true;
  else data.isDesktop = true;

  return data;
};

export default useWidth;

export const device = {
  PHONE: 600,
  TABLET: 768,
  DESKTOP: 992,
};
