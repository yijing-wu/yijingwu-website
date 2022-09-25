import React from "react";

import Grid from "@mui/material/Grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import CameraCalibrationProfile from "../../assets/projects/camera-calibration.png";
import FeaturedProjectWidget from "./FeaturedProjectWidget";

export default function FeaturedProject() {
  const featuredProjects = [
    {
      picture: CameraCalibrationProfile,
      title: "Camera Calibration",
      description: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          nulla tristique et.
        </div>
      ),
      tools: ["VS", "Code", "NPM", "XCode", "Java"],
      mainLink: "/",
      externalLink: "/",
      githubLink: "/",
      buttonLink: "/",
    },
    {
      picture: CameraCalibrationProfile,
      title: "Camera Calibration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et.",
      tools: ["VS", "Code", "NPM", "XCode", "Java"],
      // mainLink: "/",
      githubLink: "/",
      // buttonLink: "/",
    },
    {
      picture: CameraCalibrationProfile,
      title: "Camera Calibration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et.",
      tools: ["VS", "Code", "NPM", "XCode", "Java"],
      // mainLink: "/",
      // externalLink: null,
      // githubLink: "/",
      // buttonLink: "/",
    },
  ];

  return (
    <div style={{}}>
      {/* <FeaturedProjectWidget
        index={1}
        picture={CameraCalibrationProfile}
        title={"Lorem Ipsum Dolor"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et."
        }
        tool={"VS Code HEUI"}
      /> */}
      {featuredProjects.map((featuredProject, index) => {
        return (
          <FeaturedProjectWidget
            key={index}
            index={index}
            picture={featuredProject.picture}
            title={featuredProject.title}
            description={featuredProject.description}
            tools={featuredProject.tools}
            externalLink={featuredProject.externalLink}
            githubLink={featuredProject.githubLink}
            buttonLink={featuredProject.buttonLink}
          />
        );
      })}

      {/* <Grid container>
        <Grid item xs={7} style={{ backgroundColor: "red" }}>
          <img src={CameraCalibrationProfile} style={{ width: "100%" }}></img>
        </Grid>
        <Grid
          item
          xs={5}
          style={{ textAlign: "right", marginTop: 10, position: "relative" }}
        >
          <div>Featured Project</div>
          <div>Lorem Ipsum Dolor</div>
          <div
            style={{
              backgroundColor: "blue",
              width: "120%",
              height: 150,
              left: "-20%",
              position: "absolute",
            }}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et. "
            }
          </div>
          <div style={{ position: "relative", top: 150 }}>VS Code HEUI</div>
        </Grid>
      </Grid> */}
    </div>
  );
}
