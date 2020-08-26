import React from "react";
import { socialMedia } from "./../../api/data";

import "./Footer.css";

function SocialMedia(props) {
  return (
    <div className="social-media-div">
      <a
        href={socialMedia.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <i className="fa fa-github"></i>
        <span></span>
      </a>
      <a
        href={socialMedia.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <i className="fa fa-linkedin"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMedia.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
        title="Mail"
      >
        <i className="fa fa-envelope"></i>
        <span></span>
      </a>
    </div>
  );
}

export default SocialMedia;
