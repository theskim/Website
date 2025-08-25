import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { setSideBar } from "../../Redux/actions";
import me from "../../data/me.json";
import "./Footer.scss";

const Footer = () => {
  const dispatch = useDispatch();
  const year = new Date().getFullYear();

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="site-footer cool"
      role="contentinfo"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setSideBar(false));
      }}
    >
      <div className="sf__rule" aria-hidden="true" />

      <div className="sf__inner">
        <div className="sf__brand">
          <div className="sf__monogram" aria-hidden="true">
            {me.websiteAlt.slice(0, 2)}
          </div>
          <div className="sf__text">
            <p className="sf__owner">
              &copy; {year} {me.name}
            </p>
            <p className="sf__rights">All rights reserved</p>
          </div>
        </div>

        <nav className="sf__links" aria-label="Footer">
          <a
            className="sf__chip"
            href="https://github.com/theskim/Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:github" className="ico" />
            <span>Source</span>
          </a>
          <a
            className="sf__icon"
            href={me.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" />
          </a>
          <a
            className="sf__icon"
            href={`mailto:${me.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Icon icon="mdi:email-outline" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
