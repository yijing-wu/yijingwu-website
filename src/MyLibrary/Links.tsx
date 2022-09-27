import React, { useState } from "react";

import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

import { myMintGreen, myTextGrey } from "./MyColors";

export interface LinksProps {
  rightAlign?: boolean;
  buttonColor?: string;
  iconSize?: number;
  marginWidth?: number;
  buttonHoverColor?: string;
  mainLink?: string;
  isMainLinkExternal?: boolean;
  githubLink?: string;
}

export default function Links({
  rightAlign = true,
  buttonColor = myTextGrey,
  iconSize = 24,
  marginWidth = 15,
  buttonHoverColor = myMintGreen,
  mainLink,
  isMainLinkExternal = false,
  githubLink,
  ...rest
}: LinksProps) {
  const [linkMouseFocused, setLinkMouseFocused] = useState("none");

  return (
    <>
      {githubLink ? (
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          style={{
            color:
              linkMouseFocused === "github" ? buttonHoverColor : buttonColor,
            marginLeft: rightAlign ? marginWidth : 0,
            marginRight: rightAlign ? 0 : marginWidth,
          }}
          onMouseEnter={() => {
            setLinkMouseFocused("github");
          }}
          onMouseLeave={() => {
            setLinkMouseFocused("none");
          }}
        >
          <GitHubIcon style={{ fontSize: iconSize }} />
        </a>
      ) : null}
      {mainLink ? (
        isMainLinkExternal ? (
          <a
            href={mainLink}
            target="_blank"
            rel="noreferrer"
            style={{
              color:
                linkMouseFocused === "external"
                  ? buttonHoverColor
                  : buttonColor,
              marginLeft: rightAlign ? marginWidth : 0,
              marginRight: rightAlign ? 0 : marginWidth,
            }}
            onMouseEnter={() => {
              setLinkMouseFocused("external");
            }}
            onMouseLeave={() => {
              setLinkMouseFocused("none");
            }}
          >
            <OpenInNewIcon style={{ fontSize: iconSize }} />
          </a>
        ) : (
          <Link
            to={mainLink}
            style={{
              color:
                linkMouseFocused === "external"
                  ? buttonHoverColor
                  : buttonColor,
              marginLeft: rightAlign ? marginWidth : 0,
              marginRight: rightAlign ? 0 : marginWidth,
            }}
            onMouseEnter={() => {
              setLinkMouseFocused("external");
            }}
            onMouseLeave={() => {
              setLinkMouseFocused("none");
            }}
          >
            <OpenInNewIcon style={{ fontSize: iconSize }} />
          </Link>
        )
      ) : null}
    </>
  );
}
