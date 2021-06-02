import React, { useState, useEffect } from "react";

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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [windowWidth, windowHeight];
}

//context provider for visibility logic for case studies
/*each one is independent from each other due to block scoping 
and only one being present at a time*/
export const VisibilityContext = React.createContext({});

export function VisibilityProvider(props) {
  const [visibleSections, setVisibleSections] = useState(0);
  const [currentVisibleText, setCurrentVisibleText] = useState(0);
  const [forwardVisible, setForwardVisible] = useState(false);

  return (
    <VisibilityContext.Provider
      value={{
        visibleSections,
        setVisibleSections,
        currentVisibleText,
        setCurrentVisibleText,
        forwardVisible,
        setForwardVisible,
      }}
    >
      {props.children}
    </VisibilityContext.Provider>
  );
}
