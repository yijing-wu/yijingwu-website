import React from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Social() {
  const itemStyle = {
    paddingBottom: 15,
    paddingTop: 15,
  };

  return (
    <ul
      className="social-list"
      style={{
        position: "fixed",
        bottom: 0,
        zIndex: 1,
        listStyle: "none",
        margin: 0,
        marginLeft: 10,
      }}
    >
      <li style={itemStyle}>
        <a href="https://github.com/yijing-wu" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </li>
      <li style={itemStyle}>
        <a
          href="https://www.linkedin.com/in/yijing-wu-/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </li>
      <li style={itemStyle}>
        <a href="mailto:yijingwu.w@gmail.com">
          <MailOutlineIcon />
        </a>
      </li>
    </ul>
  );
}

export default Social;
