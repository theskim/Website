import Project from "../Project";
import { TrackTCImage } from "../../../../assets/ProjectImages";
import React from "react";

const TrackTC = () => {
  return (
    <Project
      title="TrackTC - Submission for NewHacks 2022"
      alt="TrackTC"
      tags="React.js • Express.js • Node.js • MongoDB • TTC API"
      image={TrackTCImage}
      link="https://devpost.com/software/tracktc"
      github="https://github.com/skim1601/Enhanced-TrackTC"
    >
      <b>Commuter students</b> may not always be aware of potential{" "}
      <b>delays</b> or <b>cancellations</b> on the{" "}
      <b>TTC (Toronto Transit Commission)</b> due to various reasons. For some,
      it can be difficult to regularly check media and the internet for updates,
      which can result in missing important closure information (who checks it
      24/7?). We personally experienced being late to exams or other important
      events due to unexpected commute interruptions. <br />
      <br />
      To help address this issue, we have developed a service that provides
      real-time and planned <b>TTC</b> delays, accessed through the{" "}
      <b>TTC API</b>. Simply enter your <b>email</b> and select your preferred{" "}
      <b>buses</b> and <b>trains</b>, and <b>TrackTC</b> will send you updates
      on their delay status every set interval.
      <br />
      <br />
      After <b>NewHacks 2022</b>, we made updates to the <b>backend</b>,
      migrated from <b>Django</b> to <b>Express.js</b>.
      <br />
      <br />
    </Project>
  );
};

export default TrackTC;
