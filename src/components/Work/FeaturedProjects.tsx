import React from "react";

import CameraCalibrationProfile from "../../assets/projects/camera-calibration.png";
import FeaturedProjectWidget from "./FeaturedProjectWidget";

export default function FeaturedProjects() {
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
      githubLink: "/",
    },
    {
      picture: CameraCalibrationProfile,
      title: "Camera Calibration",
      description:
        "Research about the camera calibration and distortion correction algorithm for self-driving vehicles",
      tools: ["Python", "C", "OpenCV", "Anaconda"],
      buttonLink: "/cameracalibration",
    },
  ];

  return (
    <div style={{}}>
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
    </div>
  );
}
