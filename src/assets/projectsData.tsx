// image import
import CameraCalibrationProfile from "./projects/camera-calibration.png";

// Project description

// template
// const projectName = {
//     title: "title",
//     picture: CameraCalibrationProfile,
//     year: "2020",
//     location: "-",
//     description:
//       "Research about the camera calibration and distortion correction algorithm for self-driving vehicles",
//     tools: ["Python", "C", "OpenCV", "Anaconda"],
//     externalLink: "",
//     githubLink: "",
//     buttonLink: "/cameracalibration",
//   };

const cameraCalibration = {
  title: "Camera Calibration and Distortion Correction",
  picture: CameraCalibrationProfile,
  year: 2020,
  location: "-",
  description:
    "Research about the camera calibration and distortion correction algorithm for self-driving vehicles",
  tools: ["Python", "C", "OpenCV", "Anaconda"],
  externalLink: "",
  githubLink: "",
  buttonLink: "/cameracalibration",
};

const smithChart = {
  title: "Smith Chart Tool",
  year: 2020,
  location: "Tongji University",
  description: "-",
  tools: ["Matlab", "Simulink"],
  githubLink: "",
  externalLink: "/smithchart",
  buttonLink: "",
};

// export components
const FeaturedProjectsData = [cameraCalibration];
const OtherProjectsData = [smithChart];
const ArchievedProjectsData = [cameraCalibration, smithChart];

export { FeaturedProjectsData, OtherProjectsData, ArchievedProjectsData };
