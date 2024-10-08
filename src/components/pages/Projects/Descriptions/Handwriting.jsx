import Project from "../Project";
import { HandwritingImage } from "../../../../assets/ProjectImages";
import React from "react";

const Handwriting = () => {
  return (
    <Project
      title="Handwriting to Text Converter (CNN + GRU)"
      alt="Handwriting"
      tags="Python • PyTorch • Pandas • CNN + GRU • Deep Learning"
      image={HandwritingImage}
      link="https://youtu.be/ZADPbL7FWgE"
    >
      The project aimed to develop a deep-learning model capable of{" "}
      <b>Optical Character Recognition (OCR)</b> to transform{" "}
      <b>handwritten text</b> into <b>digital format</b>. If we think about it,
      this technology has potential applications in various fields including
      education, healthcare, and business.
      <br />
      <br />
      Unlike traditional methods, such as <b>Hidden Markov Models</b>,{" "}
      <b>Recurrent Neural Network (RNN)</b> based architectures like{" "}
      <b>Gated Recurrent Unit (GRU)</b> and <b>Long short-term memory (LSTM)</b>
      , can consider larger contextual information making it more effective for
      the sequential nature of handwritten text.
      <br />
      <br />
      We utilized a combination of <b>Convolutional Neural Network (CNN)</b> for
      initial image processing and <b>GRUs</b> for sequence analysis, employing{" "}
      <b>Connectionist Temporal Classification (CTC) loss</b> for training the
      model.
      <br />
      <br />
      The <b>IAM Handwriting Database</b> was used to create a balanced training
      dataset to prevent biases related to word length. We ensured a rigorous
      splitting protocol for <b>training</b>, <b>validation</b>, and{" "}
      <b>testing</b> to maintain integrity in model evaluation.
      <br />
      <br />A <b>ResNet152</b>-based model served as our baseline to compare
      improvements. Our final model significantly outperformed the baseline (
      <b>52%</b> vs <b>29%</b> <b>test accuracy</b>), demonstrating the
      effectiveness of our chosen architecture in handling real-world
      handwritten text.
      <br />
      <br />
      The project not only met but exceeded initial expectations in terms of
      accuracy and application readiness, marking a significant step forward in
      the practical use of <b>OCR</b> technologies in diverse real-world
      scenarios.
    </Project>
  );
};

export default Handwriting;
