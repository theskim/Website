import Project from "../Project";
import { Aazami } from "../../../../assets/ProjectImages";
import React from "react";

const AazamiP = () => {
  return (
    <Project
      title="Aazami - MakeUofT Winner of Most Innovative Power Efficient Hack using the Tiny ML Kit"
      alt="Aazami"
      tags="Arduino Nano 33 BLE Sense • Qualcomm Tiny ML Kit • Edge Impulse • Neo Pixels"
      image={Aazami}
      link="https://devpost.com/software/aazami"
      github="https://github.com/skim1601/Aazami"
    >
      Imagine the challenges faced by those caring for loved ones with dementia.{" "}
      <b>Aazami</b> is designed address the gap to elevate the life quality of
      dementia patients and their families. It records the last{" "}
      <b>10 seconds</b> of audio, which can be replayed by saying{" "}
      <b>"I forgot"</b>.
      <br />
      <br />
      Developing Aazami involved integrating hardware and software components,
      including <b>Arduino</b> and <b>Adafruit</b>&apos;s <b>Neopixel</b> for
      hardware, and <b>Edge Impulse</b> for <b>Machine Learning</b>. Honestly,
      we were relatively new to <b>Machine Learning</b> back then. We used a
      built-in framework rather than training the model from scratch; we
      initiated the process by recording various voices for voice detection. We
      achieved around <b>95%</b> accuracy in both <b>training</b> and{" "}
      <b>validation</b> sets. However, due to time constraints and limited
      datasets, there is a possibility that the model is <b>overfitting</b> and
      biased towards a specific voiceset.
      <br />
      <br />
      Despite its areas for improvement, <b>Aazami</b> won the <b>MakeUofT</b>{" "}
      Category of Most Innovative Power Efficient Hack using the{" "}
      <b>Tiny ML Kit</b>.
    </Project>
  );
};

export default AazamiP;
