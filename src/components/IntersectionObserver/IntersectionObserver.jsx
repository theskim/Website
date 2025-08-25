import React, { useEffect, useRef, useState } from "react";

const IntersectionObserver = ({
  children,
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
  animationClass = "fade-in",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Check if IntersectionObserver is available (browser environment)
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback for server-side rendering or older browsers
      setIsVisible(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : ""}`}
    >
      {children}
    </div>
  );
};

export default IntersectionObserver;
