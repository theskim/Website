import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set initial time only after component mounts on client
    setTime(new Date());
    setMounted(true);

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Show skeleton loading until mounted
  if (!mounted || !time) {
    return (
      <span
        className="skeleton"
        style={{
          width: "200px",
          height: "1.5rem",
          display: "inline-block",
          borderRadius: "4px",
        }}
      >
        Loading...
      </span>
    );
  }

  return (
    <span style={{ transition: "opacity 0.3s ease" }}>
      {time.toLocaleTimeString("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        hour12: true,
        minute: "numeric",
        second: "numeric",
      })}
    </span>
  );
};

export default Clock;
