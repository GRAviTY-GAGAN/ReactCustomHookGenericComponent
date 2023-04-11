import { useEffect, useRef, useState } from "react";

const useDarkMode = () => {
  //   const [isDarkMode, setisDarkMode] = useState(false);
  //   let isDarkMode = useRef(false);
  const [isDarkMode, setisDarkMode] = useState(
    JSON.parse(localStorage.getItem("Dark")) || false
  );

  useEffect(() => {
    localStorage.setItem("Dark", isDarkMode);
    console.log(isDarkMode, "HOO");
  }, [isDarkMode]);

  function toggleDarkMode() {
    setisDarkMode((prev) => !prev);
  }

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
