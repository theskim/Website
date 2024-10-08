import Project from "../Project";
import { TextConferencingImage } from "../../../../assets/ProjectImages";
import React from "react";

const TextConferencing = () => {
  return (
    <Project
      title="TCP Text Conferencing Server & Client"
      alt="Text Conferencing"
      tags="C • Unix • TCP/IP • Socket Programming"
      image={TextConferencingImage}
      link="https://youtu.be/5Aqu36Bgceo"
    >
      A <b>text conferencing server</b> and <b>client</b> that allows{" "}
      <b>multiple users</b> to connect to a <b>server</b> and send messages to
      each other (entirely written in <b>C</b>). The <b>server</b> is{" "}
      <b>multi-threaded</b>, allowing multiple <b>clients</b> to connect to it
      at the same time. The server also has a <b>command line interface</b> that
      allows the user to see the status of the server and the clients connected
      to it. The client has a <b>command line interface</b> that allows the user
      to connect to a server, send messages to other <b>clients</b>, and
      disconnect from the <b>server</b>. This is all done by using <b>TCP</b>.
      It would be a functional chat application if I integrated UI. <br />
      <br />
    </Project>
  );
};

export default TextConferencing;
