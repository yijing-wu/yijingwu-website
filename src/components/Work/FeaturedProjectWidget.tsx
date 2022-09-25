import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Button, Text } from "../../MyLibrary";
import {
  myLightNavy,
  myMilkYellow,
  myMintGreen,
  myTextGrey,
} from "../../MyLibrary/MyColors";

export interface FeaturedProjectWidgetProps {
  index: number;
  picture?: any;
  title: string;
  description: React.ReactNode;
  tools: string[];
  externalLink?: string;
  githubLink?: string;
  buttonLink?: string;
}

export default function FeaturedProjectWidget({
  index,
  picture,
  title,
  description,
  tools,
  externalLink,
  githubLink,
  buttonLink,
}: FeaturedProjectWidgetProps) {
  const [linkMouseFocused, setLinkMouseFocused] = useState("none");

  const isEven = index % 2;

  return (
    <Grid container style={{ marginBottom: 100 }}>
      <Grid item xs={7} style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#35425980", // myNavy with 80 Aplha
            position: "absolute",
            zIndex: 1,
            height: "100%",
          }}
        />
        <img
          src={picture}
          style={{ width: "100%" }}
          alt={title + " profile Picture"}
        />
      </Grid>
      <Grid item xs={5} style={{ textAlign: "right", marginTop: 10 }}>
        <Text
          style={{
            color: myMintGreen,
            fontFamily: "SFMono-Regular",
            fontSize: 13,
            marginBottom: 10,
          }}
        >
          Featured Project
        </Text>
        <Text
          style={{
            fontFamily: "Calibre-Medium",
            fontSize: 28,
            color: myMilkYellow,
          }}
        >
          {title}
        </Text>

        <div style={{ position: "relative", top: 10, zIndex: 2 }}>
          <div
            style={{
              backgroundColor: myLightNavy,
              width: "120%",
              height: 150,
              left: "-20%",
              position: "absolute",
              borderRadius: "2%",
            }}
          >
            <Text
              style={{
                padding: 20,
                color: myTextGrey,
                fontSize: 18,
              }}
            >
              {description}
            </Text>
          </div>
        </div>
        <div style={{ position: "relative", top: 150 }}>
          <ul
            style={{
              fontFamily: "SFMono-Regular",
              fontSize: 13,
              color: myTextGrey,
              listStyle: "none",
              marginTop: 25,
              marginBottom: 20,
            }}
          >
            {tools.map((tool) => {
              return (
                <li style={{ display: "inline", marginLeft: 10 }}>{tool}</li>
              );
            })}
          </ul>
          {githubLink || externalLink ? (
            <div style={{ marginBottom: 10 }}>
              {githubLink ? (
                <a
                  href={githubLink}
                  style={{
                    color:
                      linkMouseFocused === "github"
                        ? myMintGreen
                        : myMilkYellow,
                    marginLeft: 15,
                  }}
                  onMouseEnter={() => {
                    setLinkMouseFocused("github");
                  }}
                  onMouseLeave={() => {
                    setLinkMouseFocused("none");
                  }}
                >
                  <GitHubIcon />
                </a>
              ) : null}
              {externalLink ? (
                <a
                  href={externalLink}
                  style={{
                    color:
                      linkMouseFocused === "external"
                        ? myMintGreen
                        : myMilkYellow,
                    marginLeft: 15,
                  }}
                  onMouseEnter={() => {
                    setLinkMouseFocused("external");
                  }}
                  onMouseLeave={() => {
                    setLinkMouseFocused("none");
                  }}
                >
                  <OpenInNewIcon />
                </a>
              ) : null}
            </div>
          ) : null}
          {buttonLink ? (
            <Button content={"Learn More"} link={buttonLink} />
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
}
