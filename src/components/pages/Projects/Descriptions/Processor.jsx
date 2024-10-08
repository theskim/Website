import Project from "../Project";
import { ProcessorImage } from "../../../../assets/ProjectImages";
import React from "react";

const Processor = () => {
  return (
    <Project
      title="16-bit Enhanced Processor"
      alt="Processor"
      image={ProcessorImage}
      link="https://youtu.be/JpTqb0nLZSQc"
      tags="Verilog (HDL) • Assembly • ModelSim • DESim • DE1-SoC Board"
      project={true}
    >
      I managed to develop a processor featuring a <b>16-bit</b>architecture and{" "}
      <b>8</b> registers, all written in <b>Verilog</b>. The processor is
      capable of executing various <b>Assembly</b> instructions like mov, movt,{" "}
      <b>add</b>, <b>sub</b>, <b>ldr</b>, <b>str</b>, and <b>b</b>, among others
      (like <b>ARM Assembly</b>). <br />
      <br />
      To debug my <b>Verilog</b> code, I had to debug the <b>FSM</b> timing
      diagram from <b>ModelSim</b>. I modified the <b>ALU</b> to implement
      instructions such as <b>add</b>, <b>sub</b>, and <b>and</b>. Tools like{" "}
      <b>DESim</b> were used to test the processor on <b>DE1-SoC Board</b>. Then
      I implemented a <b>word-matching game</b> with my own <b>Assembly</b> (on
      the board!). A demo of this program is available through the link below.{" "}
      <br />
      <br />
    </Project>
  );
};

export default Processor;
