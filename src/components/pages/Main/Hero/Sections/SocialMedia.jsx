import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import "./SocialMedia.scss";

const SocialMedia = ({
  items,
  variant = "bar", // "bar" | "icons"
  size = "md", // "sm" | "md" | "lg"
  className = "",
}) => {
  return (
    <nav
      className={[
        "social",
        `social--${variant}`,
        `social--${size}`,
        className,
      ].join(" ")}
      aria-label="Social links"
    >
      {items.map(({ icon, href, label }) => (
        <a
          key={label}
          className="social__button"
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          title={label}
        >
          <Icon className="social__icon" icon={icon} />
        </a>
      ))}
    </nav>
  );
};

SocialMedia.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  variant: PropTypes.oneOf(["bar", "icons"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export default SocialMedia;
