import Project from "../Project";
import { MapperImage } from "../../../../assets/ProjectImages";
import React from "react";

const Mapper = () => {
  return (
    <Project
      title="OTFMap - GIS Mapper"
      alt="OTFMap"
      tags="C++ (STL) • GTK • Glade • EZGL • OpenStreetMap API"
      link="https://youtu.be/OgRmhjl-Iy8"
      image={MapperImage}
    >
      Over the course of <b>four months</b>, we broke down this project into{" "}
      <b>four major milestones</b>, each with its own specific objectives.{" "}
      <br />
      <br />
      The <b>first milestone</b> involved organizing vast amounts of data into
      structured formats, as well as utilizing and extending the{" "}
      <b>OpenStreetMap API</b> by developing useful functions that would be
      useful in later milestones. To achieve this, we created our data
      structures, using various <b>STL</b> structures such as maps, sets,
      vectors, and queues.
      <br />
      <br />
      The <b>second milestone</b> centered around the development of the
      map&apos;s <b>frontend</b>, which included <b>streets</b>,{" "}
      <b>points of interest</b>, <b>subway mode</b> (shows subway lines), and{" "}
      <b>bike mode</b> (shows bike lanes), using a graphics library called{" "}
      <b> EZGL</b>, which depends on <b>GTK 3</b> and <b>Cairo</b>. The biggest
      challenge here unironically was avoiding segmentation faults.
      <br />
      <br />
      For the <b>third milestone</b>, we implemented pathfinding between{" "}
      <b>two intersection points</b> on the map using <b>Djikstra</b> and{" "}
      <b>A* algorithms</b>. We also exhibited the <b>pathfinding</b> (from one
      point to another) in our <b>GTK</b> Mapper.
      <br />
      <br />
      In the <b>final milestone</b>, we tackled the{" "}
      <b>Travelling Courier Problem</b>, utilizing various <b>heuristics</b>{" "}
      such as <b>Greedy</b>, <b>Multi-Start</b>, <b>3-opt</b> and{" "}
      <b>Hill-Climbing</b>. Our team&apos;s efforts paid off, as we finished in
      the <b>top 10%</b> (out of <b>91</b> teams).
      <br />
      <br />
      Our focus on the map was on <b>eco-friendly GIS</b>, with features that
      promoted public transit. Working on this Agile Software Development
      project was a remarkable experience that strengthened my skills in{" "}
      <b>C++</b>, <b>Data Structures</b>, and <b>Algorithms</b>.
      <br />
      <br />
      While I am unable to share the code due to academic integrity, I can
      provide it upon request. The demo is available through link below. <br />
      <br />
    </Project>
  );
};

export default Mapper;
