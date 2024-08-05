import Project from "../Project";
import { Aazami } from "../../../../assets/ProjectImages";
import React from "react";

const AazamiP = () => {
  return (
    <Project
      title="Aazami - MakeUofT Winner of Most Innovative Power Efficient Hack using the Tiny ML Kit"
      alt="Aazami"
      skills="Arduino Nano 33 BLE Sense • Qualcomm Tiny ML Kit • Edge Impulse • Neo Pixels"
      image={Aazami}
      link="https://devpost.com/software/aazami"
      github="https://github.com/skim1601/Aazami"
    >
      Aazami is designed address the gap to elevate the life quality of dementia
      patients and their families. It records the last 10 seconds of audio,
      which can be replayed by saying "I forgot".
      <br />
      <br />
      Developing Aazami involved integrating hardware and software components,
      including Arduino and Adafruit&apos;s Neopixel for hardware, and Edge
      Impulse for machine learning. Our team initiated the process by recording
      various voices to develop a dataset for “I forgot” voice detection, which
      was refined through iterative testing. We achieved around 95% accuracy in
      both training and validation. However, due to time constraints and limited
      datasets, there is a possibility that the model is overfitting and biased
      towards a specific voiceset.
      <br />
      <br />
      As a result, Aazami won the MakeUofT Category of Most Innovative Power
      Efficient Hack using the Tiny ML Kit.
    </Project>
  );
};

export default AazamiP;
