import { highlightStyle } from "../MyLibrary/MyStyles";

const jobsData = [
  {
    company: "Upduo",
    abbreviation: "Upduo",
    title: "Software Engineer Co-op",
    time: "June 2022 - December 2022",
    location: "United States",
    link: "https://www.upduo.com/",
    duties: [
      <div>
        Performed as a full-stack engineer in an agile team to build, improve
        and maintain cross-platform web and mobile applications
      </div>,
      <div>
        Collaborated with the product and design team and conducted{" "}
        <div style={highlightStyle}>{` TypeScript `}</div> programming (
        <div style={highlightStyle}>{`React`}</div> and{" "}
        <div style={highlightStyle}>{`React Native`}</div> with{" "}
        <div style={highlightStyle}>{`Redux `}</div>
        state container) to deliver new UI/UX for front-end, including
        animations, graph data visualization, kudos interface, etc.
      </div>,

      <div>
        Worked on <div style={highlightStyle}>{` Django`}</div> backend by{" "}
        <div style={highlightStyle}>{` Python`}</div>, applied celery to manage
        asynchronous tasks, updated{" "}
        <div style={highlightStyle}>{` GraphQL`}</div> while maintaining minimal
        calls to the <div style={highlightStyle}>{` PostgreSQL `}</div>database,
        implemented unit and integration tests to validate the behavior
      </div>,
      <div>
        Integrated <div style={highlightStyle}>{` iOS `}</div> framework CallKit
        and Android ConnectionService via Callkeep and coded with
        <div style={highlightStyle}>{` Objective-C `}</div> in{" "}
        <div style={highlightStyle}>{` Xcode `}</div> and
        <div style={highlightStyle}>{` Java `}</div> in{" "}
        <div style={highlightStyle}>{` Android Studio `}</div> to realize a
        video call notification feature
      </div>,
      <div>
        Performed local camera and microphone selection and check features
        through Agora to ensure <div style={highlightStyle}>{` WebRTC `}</div>{" "}
        video quality
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
        single-point mapping with <div style={highlightStyle}>{` Python `}</div>
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
        Sternberg task through feature selection and machine learning with{" "}
        <div style={highlightStyle}>{` Python `}</div>
      </div>,
      <div>
        Extracted features of EEG signals by empirical mode decomposition (EMD)
        and phase space reconstruction (PSR) with{" "}
        <div style={highlightStyle}>{` MATLAB `}</div>
      </div>,
      <div>
        Executed Support Vector Machine (SVM), K-nearest neighbor (KNN), Random
        Forest (RF), and nested cross-validation{" "}
      </div>,
      <div>
        Accomplished improvement of classification performance from 71.45% to
        91.82% under SVM and published the result in an
        <div style={highlightStyle}>{` IEEE `}</div> paper as the{" "}
        <div style={highlightStyle}>{` first author `}</div>
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
        disabilities by performing image segmentation via
        <div style={highlightStyle}>{` PyTorch `}</div>
        for indoor map construction as well as detecting obstacles based on the
        <div style={highlightStyle}>{` YoloV3 `}</div> algorithm{" "}
      </div>,
      <div>
        Guided a four-person research team and participated in the development
        of <div style={highlightStyle}>{` AR `}</div> assisted module for indoor
        positioning and navigation system in China International Import Expo
        (CIIE) in 2019 and 2020{" "}
      </div>,
    ],
  },
];

export { jobsData };
