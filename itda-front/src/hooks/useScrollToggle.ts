import { useEffect, useState } from "react";
import throttle from "util/throttle";

const useScrollToggle = (initState: Boolean = false) => {
  const [scrollFlag, setScrollFlag] = useState(initState);

  const updateScroll = () => {
    //TODO: 매직넘버 리팩토링(10)
    const { scrollY } = window;
    if (scrollY > 10) setScrollFlag(true);
    else setScrollFlag(false);
  };
  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollFlag;
};

export default useScrollToggle;
