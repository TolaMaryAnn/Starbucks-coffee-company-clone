import React, { useState, useEffect } from "react";

const PageTransition = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false); // End the animation after the specified duration
    }, 500); // Animation duration in milliseconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <div
      className={`${
        isAnimating ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
      } transition-all duration-500`}
    >
      {children}
    </div>
  );
};

export default PageTransition;


