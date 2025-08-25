import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import Divider from "../../../assets/Divider/Divider";
import "./Education.scss";
import me from "../../../data/me.json";
import { Icon } from "@iconify/react";

const Title = () => (
  <header className="education__header">
    <h1 id="education-heading" className="oasis-logo">
      education
    </h1>
  </header>
);

const Description = () => {
  const details = Array.isArray(me.schoolDetails) ? me.schoolDetails : [];
  return (
    <div className="education__body">
      <figure className="education__logo">
        <img
          src={me.schoolLogo}
          alt={`${me.schoolName} crest`}
          loading="lazy"
          width={240}
          height={240}
        />
        <figcaption className="sr-only">{me.schoolName} crest</figcaption>
      </figure>

      <h2 className="education__school">
        <Icon icon="material-symbols:school" className="i" aria-hidden />
        <span>{me.schoolName}</span>
      </h2>

      {/* Degree can have italics/superscripts, so keep Markdown */}
      <ReactMarkdown
        components={{
          a: (props) => <a {...props} rel="noreferrer noopener" />,
          h1: "p",
          h2: "p",
          h3: "p",
        }}
      >
        {me.degree}
      </ReactMarkdown>

      {me.schoolDuration && (
        <p className="education__duration">
          <Icon icon="ic:round-access-time-filled" className="i" aria-hidden />
          <time dateTime="2026-04">{me.schoolDuration}</time>
        </p>
      )}

      {details.length > 0 && (
        <ul className="education__highlights" role="list">
          {details.map((d, idx) => (
            <li key={idx}>
              <ReactMarkdown components={{ p: React.Fragment }}>
                {d}
              </ReactMarkdown>
            </li>
          ))}
        </ul>
      )}

      {me.schoolLearnMore && (
        <a
          className="btn btn--primary"
          href={me.schoolLearnMore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Learn more about ${me.schoolName}`}
        >
          Learn more
          <Icon icon="mdi:arrow-top-right" className="i" aria-hidden />
        </a>
      )}
    </div>
  );
};

const Wrapper = ({ children }) => (
  <section
    id="education"
    aria-labelledby="education-heading"
    className="education"
  >
    {children}
  </section>
);

Wrapper.propTypes = { children: PropTypes.node.isRequired };

const Education = () => (
  <>
    <Wrapper>
      <Title />
      <Description />
    </Wrapper>
    <Divider />
  </>
);

export default Education;
