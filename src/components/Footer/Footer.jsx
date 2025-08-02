import React, { useState, useEffect } from "react";
import "./Footer.scss";
import { useDispatch } from "react-redux";
import { setSideBar } from "../../Redux/actions";
import me from "../../data/me.json";

const Footer = () => {
  const dispatch = useDispatch();
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div
      className="footer"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setSideBar(false));
      }}
    >
      <footer>
        <p>
          &copy; {me.name} {year || "..."}. All rights reserved.{" "}
          <a
            href="https://github.com/theskim/Website"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
          >
            [View Source]
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
