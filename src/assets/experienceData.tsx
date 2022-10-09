import { myTextLightGrey } from "../MyLibrary/MyColors";

const highlightStyle = {
  display: "inline",
  fontFamily: "Calibre-Medium",
  color: myTextLightGrey,
};

const jobsData = [
  {
    company: "Upduo",
    abbreviation: "Upduo",
    title: "Software Engineer Co-op",
    time: "June 2022 - Present",
    location: "United States",
    link: "https://www.upduo.com/",
    duties: [
      <div>
        Worked as a full-stack engineer to build and improve Upduo's web/mobile
        app via <div style={highlightStyle}>{` React, React Native `}</div>and
        <div style={highlightStyle}>{` Django`}</div> with
      </div>,
      <div>
        Integrated iOS framework <div style={highlightStyle}>{` CallKit `}</div>
        and Android <div style={highlightStyle}>{` ConnectionService `}</div>
        via Callkeep and modified the native code with
        <div style={highlightStyle}>{` Objective-C `}</div> and
        <div style={highlightStyle}>{` Java `}</div> to realize a video call
        notification feature
      </div>,
      <div>
        Performed local camera and microphone selection and check features
        through <div style={highlightStyle}>{` Agora `}</div> to ensure video
        chat quality
      </div>,
      <div>
        Collaborated with product and design team to conduct visual changes and
        deliver new user interface, such as animation, time windows, data
        visualization
      </div>,
      <div>
        Implemented beta testing and unit tests to locate Upduo web/mobile app
        issues
      </div>,
    ],
  },
  {
    company: "Huawei Technologies",
    abbreviation: "Huawei",
    title: "Algorithm Engineer Intern",
    time: "July 2020 - September 2020",
    location: "Shanghai",
    link: "https://www.huawei.com/en/corporate-information",
    duties: [
      <div>
        Applied calibration and distortion correction algorithm to process video
        flows of camera sensor for self-driving vehicles
      </div>,
      <div>
        Achieved reduction of distortion correction errors from 1.395 ± 0.136
        pixels to 0.055 ± 0.192 pixels through cylindrical projection and
        single-point mapping
      </div>,
      <div>
        Increased processing efficiency of DSP by developing mapping table and
        video processing algorithms for digital signal processors with
        <div style={highlightStyle}>{` C`}</div> based on
        <div style={highlightStyle}>{` OpenCV`}</div>
      </div>,
    ],
  },
  {
    company: "Digital Image Lab",
    abbreviation: "DIL",
    title: "Research Assistant",
    time: "September 2019 - June 2021",
    location: "Tongji University, Shanghai",
    link: "",
    duties: [
      <div>
        Constructed classification models of brain during working memory
        maintenance based on 128-channel EEG dataset for material-specific
        Sternberg task through feature selection and machine learning
      </div>,
      <div>
        Extracted features of EEG signals by empirical mode decomposition (EMD)
        and phase space reconstruction (PSR){" "}
      </div>,
      <div>
        Executed Support Vector Machine (SVM), K-nearest neighbor (KNN), Random
        Forest (RF), and nested cross-validation{" "}
      </div>,
      <div>
        Accomplished improvement of classification performance from 71.45% to
        91.82% under SVM and published the result in an IEEE paper as the first
        author{" "}
      </div>,
    ],
  },
  {
    company: "Positioning and Navigation Lab",
    abbreviation: "PNL",
    title: "Research Assistant",
    time: "April 2019 - June 2021",
    location: "Tongji University, Shanghai",
    link: "",
    duties: [
      <div>
        Built a Barrier-Free Positioning and Navigation System for people with
        disabilities by performing image segmentation via PyTorch for indoor map
        construction as well as detecting obstacles based on the YoloV3
        algorithm{" "}
      </div>,
      <div>
        Guided a four-person research team and participated in the development
        of AR assisted module for indoor positioning and navigation system in
        China International Import Expo (CIIE) in 2019 and 2020{" "}
      </div>,
    ],
  },
];

export { jobsData };
