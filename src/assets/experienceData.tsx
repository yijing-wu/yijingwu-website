import { highlightStyle } from "../MyLibrary/MyStyles";

const jobsData = [
  {
    company: "Autodesk",
    abbreviation: "Autodesk",
    title: "Cloud DevOps Engineer Intern",
    time: "May 2023 - Present",
    location: "United States",
    link: "https://www.autodesk.com/",
    duties: [
      <div>
        Developed a Serverless Slack bot in
        <div style={highlightStyle}>{` Python`}</div>, automating issue
        resolution by <div style={highlightStyle}>{` Generative AI `}</div>
        techniques to support Azure migration
      </div>,
      <div>
        Integrated ServiceNow and JIRA with Slack APIs to streamline ticket
        management, resulting in a significant reduction in support response
        times
      </div>,
      <div>
        Applied <div style={highlightStyle}>{` Azure OpenAI `}</div> and{" "}
        <div style={highlightStyle}>{` LangChain`}</div>, utilizing
        <div style={highlightStyle}>{` prompt
        engineering, embeddings, NLP `}</div>
        and <div style={highlightStyle}>{` LLM Agents `}</div>
        to achieve retrieval augmented generation (
        <div style={highlightStyle}>{`RAG`}</div>), data analysis and
        interactive conversations
      </div>,
      <div>
        Established a robust <div style={highlightStyle}>{` CI/CD `}</div>
        pipeline using <div style={highlightStyle}>{` Terraform `}</div> and
        <div style={highlightStyle}>{` Jenkins`}</div>, following Infrastructure
        as Code (<div style={highlightStyle}>{` IaC`}</div>) principles to
        enable end-to-end cloud deployment automation, thereby enhancing
        efficiency and maintaining consistency
      </div>,
      <div>
        Implemented serverless architecture in{" "}
        <div style={highlightStyle}>{` AWS`}</div>, utilizing services such as{" "}
        <div style={highlightStyle}>{` Lambda, ECR, S3 Bucket,
        DynamoDB`}</div>
        , SageMaker, VPC, API Gateway, IAM, CloudWatch, and KMS to optimize the
        backend infrastructure for seamless operations
      </div>,
      <div>
        Trained a multi-class classification model with sklearn and Logistic
        Regression, achieved an 81% accuracy in issue diagnosis
      </div>,
    ],
  },
  {
    company: "Upduo",
    abbreviation: "Upduo",
    title: "Software Engineer Intern",
    time: "June 2022 - December 2022",
    location: "United States",
    link: "https://www.upduo.com/",
    duties: [
      <div>
        Contributed as a full-stack engineer in an agile team to build, improve
        and maintain cross-platform web and mobile applications
      </div>,
      <div>
        Collaborated with product and design team, conducting front-end
        development in <div style={highlightStyle}>{`React`}</div> and{" "}
        <div style={highlightStyle}>{`React Native`}</div> along with Redux
        through <div style={highlightStyle}>{` TypeScript `}</div> to enhance
        UI/UX, delivered graph data visualization, animations, and kudos
        interface, etc
      </div>,
      <div>
        Worked on <div style={highlightStyle}>{` Django`}</div> backend by{" "}
        <div style={highlightStyle}>{` Python`}</div>, applied Celery for
        asynchronous task management, optimized{" "}
        <div style={highlightStyle}>{` GraphQL`}</div> to minimize queries to
        <div style={highlightStyle}>{` PostgreSQL `}</div>database, and built
        Unit Testing and Integration Testing to ensure application robustness
      </div>,
      <div>
        Implemented a video call notification feature using{" "}
        <div style={highlightStyle}>{` iOS `}</div> framework CallKit through{" "}
        <div style={highlightStyle}>{` Objective-C `}</div> in Xcode and Android
        ConnectionService thorugh <div style={highlightStyle}>{` Java `}</div>{" "}
        in <div style={highlightStyle}>{` Android`}</div>, leading to a
        significant enhancement in match pick-up rate
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
