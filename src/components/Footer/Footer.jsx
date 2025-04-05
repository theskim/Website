import React from "react";
import "./Footer.scss";
import { useDispatch } from "react-redux";
import { setSideBar } from "../..";
import me from "../../data/me.json";

const Footer = () => {
  const dispatch = useDispatch();

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
          &copy; {me.name} {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
