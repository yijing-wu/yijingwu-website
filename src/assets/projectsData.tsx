// image import
import CameraCalibrationProfile from "./projects/camera-calibration.png";
import CourseSelectionProfile from "./projects/courseSelection.png";
import EEGProfile from "./projects/eeg.png";
import IntelligentCarsProfile from "./projects/intelligentCars.png";
import PersonalWebsiteProfile from "./projects/personalWebsite2022.png";
import RubiksCubeProfile from "./projects/rubiks-cube.png";
import SmithChartProfile from "./projects/simithChart.png";

// Project description

const aquaGolffCollectionRobot = {
  title: "Automatic Collection Robot for Aqua Golf",
  picture: CameraCalibrationProfile,
  year: 2020,
  location: "Tongji University",
  description: (
    <>
      <div>
        - A robot programmed with <strong>Raspberry Pi</strong>, which is able
        to locate, recognize and collect aqua golf in water automatically.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - The robot arm is designed and manufactured via Fusion360 and 3D
        printer.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Performed image processing, conducted golf positioning and recognition
        through image HSB using OpenCV
      </div>
    </>
  ),
  tools: ["Python", "C++", "RaspberryPi", "OpenCV"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const borderlandsVRGame = {
  title: "Borderlands (VR FPS Game)",
  picture: null,
  year: 2018,
  location: "Shanghai Jiao Tong University",
  description: (
    <div>
      A VR FPS (First Person Shooter) game on HTC Vive headset via Unity 3D,
      Maya.
    </div>
  ),
  tools: ["Unity", "C#", "Maya", "VR"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const cameraCalibration = {
  title: "Camera Calibration and Distortion Correction",
  picture: CameraCalibrationProfile,
  year: 2020,
  location: "Huawei Technologies",
  description: (
    <>
      <div>
        - Processed video flows of camera sensor for self-driving vehicles with
        camera calibration and distortion correction algorithm.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Developed mapping table and video processing algorithms for digital
        signal processors based on OpenCV with <strong>C</strong>.
      </div>
    </>
  ),
  tools: ["Python", "C", "OpenCV", "Anaconda"],
  // mainLink: "/cameracalibration",
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const courseSelectionSystem = {
  title: "Course Selection Management System",
  picture: CourseSelectionProfile,
  year: 2020,
  location: "Tongji University",
  description: (
    <div>
      A course selection management system with separation of frontend and
      backend based on <strong>Vue.js</strong>, <strong>Node.js</strong>,{" "}
      <strong>Element-UI</strong> and <strong>MySQL</strong>.
    </div>
  ),
  tools: ["Vue.js", "Node.js", "MySQL", "ECharts", "Javascript"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const intelligentCars = {
  title: "Electromagnetic Guiding Intelligent Cars",
  picture: IntelligentCarsProfile,
  year: 2019,
  location: "Tongji University",
  description: (
    <div>
      A purely electromagnetic guided smart car, which can perform obstacle
      detection and pass race tracks with various terrains, including straights,
      curves, ramps, intersections open-circuits and barricades.
    </div>
  ),
  tools: ["C", "Keil uVision"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const heartDiseaseAnalysis = {
  title: "Heart Disease Analysis",
  picture: null,
  year: 2022,
  location: "Northeastern University",
  description: (
    <div>
      Conducted EDA(exploratory data analysis), machine learning methods and
      feature importance analysis on a 400k adult samples{" "}
      <a
        className="underline-animation"
        target="_blank"
        rel="noreferrer"
        href="https://www.kaggle.com/datasets/kamilpytlak/personal-key-indicators-of-heart-disease"
      >
        dataset
      </a>{" "}
      from CDC, to explore the Personal Key Indicators of Heart Disease
    </div>
  ),
  tools: ["Python", "Sklearn", "RandomForest", "KNN"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const eeg = {
  title: "Classification of EEG Signals during Working Memory Maintenance",
  picture: EEGProfile,
  year: 2021,
  location: "-",
  description:
    "Constructed classification models of brain during working memory maintenance based on 128-channel EEG dataset for material-specific Sternberg task through feature selection and machine learning",
  tools: ["Python", "Matlab", "EEG", "SVM", "RF", "Machine-learning"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const personalWebsiteV2 = {
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

const rubikCubeHelper = {
  title: "Rubik’s Cube Helper",
  picture: RubiksCubeProfile,
  year: 2021,
  location: "Northeastern University",
  description: (
    <>
      <div>
        - A dynamic and cross-browser compatible web application with{" "}
        <strong>React</strong>, aiming to bring more personalized Rubik's Cube
        experience
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Implemented responsive design, accessibility development, and multiple
        interactions met WCAG 2.1 AA standard
      </div>
    </>
  ),
  tools: ["React", "Javascript", "Node.js", "AWS"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const santoriniGame = {
  title: "Santorini",
  picture: null,
  year: 2022,
  location: "-",
  description: (
    <>
      <div>
        A strategy-based board game playable with 2 or 3 players, developed in{" "}
        <strong>Java</strong>.
      </div>
      <div style={{ height: 4 }} />
      <div>
        Players need to choose their God Card, build towers on the battlefield
        and climb the 3rd level before their enemies even notice it.
      </div>
    </>
  ),
  tools: ["Java", "Maven"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const smithChart = {
  title: "Smith Chart Tool",
  picture: SmithChartProfile,
  year: 2019,
  location: "Tongji University",
  description:
    "A Matlab and Simulink based graphical calculator tool for radio frequency (RF) engineering.",
  tools: ["Matlab", "Simulink"],
  // mainLink: "/smithchart",
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

// export components
const FeaturedProjectsData = [
  cameraCalibration,
  eeg,
  rubikCubeHelper,
  courseSelectionSystem,
];
const OtherProjectsData = [
  personalWebsiteV2,
  santoriniGame,
  smithChart,
  borderlandsVRGame,
  heartDiseaseAnalysis,
  intelligentCars,
  aquaGolffCollectionRobot,
];
const ArchivedProjectsData = [
  aquaGolffCollectionRobot,
  borderlandsVRGame,
  cameraCalibration,
  courseSelectionSystem,
  eeg,
  intelligentCars,
  heartDiseaseAnalysis,
  personalWebsiteV2,
  rubikCubeHelper,
  santoriniGame,
  smithChart,
];

export { FeaturedProjectsData, OtherProjectsData, ArchivedProjectsData };
