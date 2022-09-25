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

interface FeaturedProjectImageProps {
  picture?: any;
  title: string;
}

function FeaturedProjectImage({ picture, title }: FeaturedProjectImageProps) {
  return (
    <>
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
    </>
  );
}

interface FeaturedProjectDetailsProps {
  textRightAlign: boolean;
  title: string;
  description: React.ReactNode;
  tools: string[];
  externalLink?: string;
  githubLink?: string;
  buttonLink?: string;
}

function FeaturedProjectDetails({
  textRightAlign,
  title,
  description,
  tools,
  externalLink,
  githubLink,
  buttonLink,
}: FeaturedProjectDetailsProps) {
  const [linkMouseFocused, setLinkMouseFocused] = useState("none");

  return (
    <>
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
            left: textRightAlign ? "-20%" : "0%",
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
            padding: 0,
          }}
        >
          {tools.map((tool) => {
            return (
              <li
                style={{
                  display: "inline",
                  marginLeft: textRightAlign ? 10 : 0,
                  marginRight: textRightAlign ? 0 : 10,
                }}
              >
                {tool}
              </li>
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
                    linkMouseFocused === "github" ? myMintGreen : myMilkYellow,
                  marginLeft: textRightAlign ? 15 : 0,
                  marginRight: textRightAlign ? 0 : 15,
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
                  marginLeft: textRightAlign ? 15 : 0,
                  marginRight: textRightAlign ? 0 : 15,
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
    </>
  );
}

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
  const isOdd = index % 2 === 1;
  console.log(index, isOdd);

  return (
    <Grid container style={{ marginBottom: 100 }}>
      {!isOdd ? (
        <>
          <Grid item xs={7} style={{ position: "relative" }}>
            <FeaturedProjectImage picture={picture} title={title} />
          </Grid>
          <Grid item xs={5} style={{ textAlign: "right", marginTop: 10 }}>
            <FeaturedProjectDetails
              textRightAlign={!isOdd}
              title={title}
              description={description}
              tools={tools}
              externalLink={externalLink}
              githubLink={githubLink}
              buttonLink={buttonLink}
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={5} style={{ textAlign: "left", marginTop: 10 }}>
            <FeaturedProjectDetails
              textRightAlign={!isOdd}
              title={title}
              description={description}
              tools={tools}
              externalLink={externalLink}
              githubLink={githubLink}
              buttonLink={buttonLink}
            />
          </Grid>
          <Grid item xs={7} style={{ position: "relative" }}>
            <FeaturedProjectImage picture={picture} title={title} />
          </Grid>
        </>
      )}
    </Grid>
  );
}
