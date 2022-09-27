// image import
import CameraCalibrationProfile from "./projects/camera-calibration.png";
import EEGProfile from "./projects/eeg.png";
import SmithChartProfile from "./projects/simithChart.png";

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
//     mainLink: "",
//     githubLink: "",
//   };

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
  // mainLink: "/cameracalibration",
  mainLink: "",
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
  githubLink: "",
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
  githubLink: "",
};

// export components
const FeaturedProjectsData = [cameraCalibration, eeg];
const OtherProjectsData = [smithChart];
const ArchivedProjectsData = [cameraCalibration, smithChart, eeg];

// const FeaturedProjectsData = [
//   {
//     picture: CameraCalibrationProfile,
//     title: "Camera Calibration and Distortion Correction",
//     description: (
//       <div>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla
//         tristique et.
//       </div>
//     ),
//     tools: ["VS", "Code", "NPM", "XCode", "Java"],
//     externalLink: "/",
//     githubLink: "/",
//     buttonLink: "/",
//   },
//   {
//     picture: CameraCalibrationProfile,
//     title: "Camera Calibration",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et.",
//     tools: ["VS", "Code", "NPM", "XCode", "Java"],
//     githubLink: "/",
//   },
//   {
//     picture: CameraCalibrationProfile,
//     title: "Camera Calibration",
//     description:
//       "Research about the camera calibration and distortion correction algorithm for self-driving vehicles",
//     tools: ["Python", "C", "OpenCV", "Anaconda"],
//     buttonLink: "/cameracalibration",
//   },
// ];

// const OtherProjectsData = [
//   {
//     title: "Camera Calibration1",
//     description: (
//       <div>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla
//         tristique et.
//       </div>
//     ),
//     tools: ["VS", "Code", "NPM", "XCode", "Java"],
//     externalLink: "/",
//     githubLink: "/",
//     buttonLink: "/",
//   },
//   {
//     title: "Camera Calibration Lorem ipsum dolor",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et.",
//     tools: ["VS", "Code", "NPM", "XCode", "Java"],
//     githubLink: "/",
//   },
//   {
//     title: "Camera Calibration3",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et.",
//     tools: ["VS", "Code", "NPM", "XCode", "Java"],
//   },
//   {
//     title: "Camera Calibration4",
//     description: (
//       <div>
//         Eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
//         nulla tristique et.
//       </div>
//     ),
//     tools: ["VS", "Code", "NPM", "XCode", "Java"],
//     externalLink: "/",
//     githubLink: "/",
//     buttonLink: "/",
//   },
//   {
//     title: "Camera Calibration5",
//     description: (
//       <div>
//         Aliquam nulla tristique et. Eiusmod tempor incididunt ut labore et
//         dolore magna aliqua.
//       </div>
//     ),
//     tools: ["VS", "Code", "NPM", "XCode", "Java"],
//     externalLink: "/",
//     githubLink: "/",
//     buttonLink: "/",
//   },
// ];

// const ProjectsData = [
//   {
//     year: "2021",
//     title: "Camera Calibration1",
//     location: "Frozen yoghurt",
//     tools: ["VS", "Code", "NPM", "XCode", "Java"],
//     externalLink: "externalLink",
//     githubLink: "/",
//     buttonLink: "/",
//   },
//   {
//     year: "2021",
//     title: "Camera Calibration2",
//     location: "Frozen yoghurt",
//     tools: [
//       "VS",
//       "Code",
//       "NPM",
//       "XCode",
//       "Java",
//       "Code",
//       "NPM",
//       "XCode",
//       "Java",
//     ],
//     // externalLink: "/",
//     githubLink: "/",
//     buttonLink: "/",
//   },
//   {
//     year: "2020",
//     title: "Smith Chart Tool",
//     location: "Tongji University",
//     tools: ["Matlab", "Simulink"],
//     externalLink: "/smithchart",
//   },
// ];

export { FeaturedProjectsData, OtherProjectsData, ArchivedProjectsData };
