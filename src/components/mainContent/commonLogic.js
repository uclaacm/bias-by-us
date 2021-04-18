import { useState, useEffect } from "react";

/*a custom hook that returns an array containing the windowWidth and windowHeight 
updated by changes in browser for use by navbars or case studies*/
export function useWindowDimensions() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());

  function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
  }
  function getWindowHeight() {
    const { innerHeight: height } = window;
    return height;
  }

  //update dimensions when they change
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
      setWindowHeight(getWindowHeight());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resizeWidth", handleResize);
  }, [windowWidth, windowHeight]);

  return [windowWidth, windowHeight];
}
