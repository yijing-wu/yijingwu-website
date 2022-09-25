import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

import { Button, Links, Text } from "../../MyLibrary";
import { myLightNavy, myMintGreen, myTextGrey } from "../../MyLibrary/MyColors";

export default function OtherProjects() {
  const [onShowMore, setOnShowMore] = useState(false);
  const [onArchiveLinkHover, setOnArchiveLinkHover] = useState(false);

  const _handleShowMore = () => {
    setOnShowMore(!onShowMore);
  };

  const otherProjects = [
    {
      title: "Camera Calibration1",
      description: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          nulla tristique et.
        </div>
      ),
      tools: ["VS", "Code", "NPM", "XCode", "Java"],
      externalLink: "/",
      githubLink: "/",
      buttonLink: "/",
    },
    {
      title: "Camera Calibration Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et.",
      tools: ["VS", "Code", "NPM", "XCode", "Java"],
      githubLink: "/",
    },
    {
      title: "Camera Calibration3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et.",
      tools: ["VS", "Code", "NPM", "XCode", "Java"],
    },
    {
      title: "Camera Calibration4",
      description: (
        <div>
          Eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          nulla tristique et.
        </div>
      ),
      tools: ["VS", "Code", "NPM", "XCode", "Java"],
      externalLink: "/",
      githubLink: "/",
      buttonLink: "/",
    },
    {
      title: "Camera Calibration5",
      description: (
        <div>
          Aliquam nulla tristique et. Eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </div>
      ),
      tools: ["VS", "Code", "NPM", "XCode", "Java"],
      externalLink: "/",
      githubLink: "/",
      buttonLink: "/",
    },
  ];

  return (
    <div style={{ textAlign: "center", marginBottom: 100 }}>
      <Text
        style={{
          fontSize: 32,
          fontFamily: "Calibre-Semibold",
          marginBottom: 10,
        }}
      >
        {"Other Noteworthy Projects"}
      </Text>
      <Text style={{ marginBottom: 40 }}>
        <a
          className="work-archieve-link"
          href="/"
          style={{
            color: myMintGreen,
            fontSize: 14,
            fontFamily: "SFMono-Regular",
          }}
        >
          {"view the archive"}
        </a>
      </Text>

      <Grid
        container
        spacing={2}
        style={{
          textAlign: "left",
        }}
      >
        {otherProjects
          .slice(0, onShowMore ? otherProjects.length : 3)
          .map((project, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} style={{ marginBottom: 20 }}>
                <div
                  style={{
                    backgroundColor: myLightNavy,
                    borderRadius: 6,
                    height: "90%",
                    padding: 20,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <FolderOutlinedIcon
                      style={{
                        color: myMintGreen,
                        fontSize: 40,
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    />
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Links
                        iconSize={22}
                        marginWidth={10}
                        githubLink={project.githubLink}
                        externalLink={project.externalLink}
                      />
                    </div>
                  </div>

                  <Text
                    style={{
                      fontFamily: "Calibre-Medium",
                      fontSize: 22,
                      marginBottom: 8,
                    }}
                  >
                    {project.title}
                  </Text>
                  <Text style={{ color: myTextGrey, marginBottom: 30 }}>
                    {project.description}
                  </Text>
                  <ul
                    style={{
                      fontFamily: "SFMono-Regular",
                      fontSize: 13,
                      color: myTextGrey,
                      padding: 0,
                      position: "absolute",
                      bottom: 10,
                    }}
                  >
                    {project.tools.map((tool) => {
                      return (
                        <li style={{ display: "inline", marginRight: 10 }}>
                          {tool}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Grid>
            );
          })}
      </Grid>
      <div style={{ height: 50 }} />
      <Button
        content={onShowMore ? "Show Less" : "Show More"}
        fontSize={14}
        onClick={() => _handleShowMore()}
      />
    </div>
  );
}
