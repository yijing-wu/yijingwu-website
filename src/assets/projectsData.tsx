// image import
import CameraCalibrationProfile from "./projects/camera-calibration.png";
import CourseSelectionProfile from "./projects/courseSelection.png";
import EEGProfile from "./projects/eeg.png";
import PersonalWebsiteProfile from "./projects/personalWebsite2022.png";
import SmithChartProfile from "./projects/simithChart.png";

// Project description
const cameraCalibration = {
  title: "Camera Calibration and Distortion Correction",
  picture: CameraCalibrationProfile,
  year: 2020,
  location: "-",
  description:
    "Research about the camera calibration and distortion correction algorithm for self-driving vehicles",
  tools: ["Python", "C", "OpenCV", "Anaconda"],
  // mainLink: "/cameracalibration",
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const courseSelectionSystem = {
  title: "Camera Calibration and Distortion Correction",
  picture: CameraCalibrationProfile,
  year: 2020,
  location: "-",
  description:
    "Research about the camera calibration and distortion correction algorithm for self-driving vehicles",
  tools: ["Python", "C", "OpenCV", "Anaconda"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const eeg = {
  title: "Classification of EEG Signals during working memory maintenance",
  picture: EEGProfile,
  year: 2020,
  location: "-",
  description:
    "Constructed classification models of brain during working memory maintenance based on 128-channel EEG dataset for material-specific Sternberg task through feature selection and machine learning",
  tools: ["Python", "Matlab", "EEG", "SVM", "RF", "Machine-learning"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const personalWebsite = {
  title: "Personal Website V2",
  picture: PersonalWebsiteProfile,
  year: 2022,
  location: "-",
  description: (
    <div>
      Second version of my personal website, built with <strong>React</strong>{" "}
      and hosted on <strong>GitHub Pages</strong>. This website!
    </div>
  ),
  tools: ["React", "Typescript", "CSS"],
  mainLink: "/",
  isMainLinkExternal: true, // inorder to redirect
  githubLink: "https://github.com/yijing-wu/yijingwu-website",
};

const smithChart = {
  title: "Smith Chart Tool",
  picture: SmithChartProfile,
  year: 2020,
  location: "Tongji University",
  description: "-",
  tools: ["Matlab", "Simulink"],
  // mainLink: "/smithchart",
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

// export components
const FeaturedProjectsData = [cameraCalibration, eeg];
const OtherProjectsData = [personalWebsite, smithChart];
const ArchivedProjectsData = [
  cameraCalibration,
  eeg,
  personalWebsite,
  smithChart,
];

export { FeaturedProjectsData, OtherProjectsData, ArchivedProjectsData };
