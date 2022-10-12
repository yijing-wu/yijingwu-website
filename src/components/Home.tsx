import React from "react";

import * as GoogleAnalytics from "../config/GoogleAnalytics";
import { Button, Text } from "../MyLibrary";
import {
  myTextGrey,
  myMilkYellowC0Alpha,
  myMintGreen,
} from "../MyLibrary/MyColors";
import { myName, myBriefIntro } from "../assets/myData";
// @ts-ignore
import MyResume from "../assets/Yijing_WU.pdf";

function Home() {
  return (
    <div
      id="head"
      style={{
        paddingTop: 150,
        paddingBottom: 150,
      }}
    >
      <Text
        style={{
          fontFamily: "SFMono-Regular",
          marginBottom: 30,
          color: myMintGreen,
        }}
      >
        Hi, this is
      </Text>
      <Text style={{ fontFamily: "Calibre-Semibold", fontSize: 80 }}>
        {myName}
      </Text>
      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: 80,
          color: myMilkYellowC0Alpha,
        }}
      >
        {"I write Code."}
      </Text>
      <div style={{ width: "65%", marginBottom: 30 }}>
        <Text style={{ fontSize: 22, color: myTextGrey, lineHeight: 1.3 }}>
          {myBriefIntro}
        </Text>
      </div>
      {/* Resume: updated on Oct 9th, 2022 */}
      <Button
        onClick={() => {
          // window.open(
          //   "https://drive.google.com/file/d/1U-nazBTQMz54kme54UCse3lFwpQVe7gY/view?usp=sharing",
          //   "_blank"
          // );
          window.open(MyResume, "_blank");
          GoogleAnalytics.logEvent("click-resume", "click-resume", "button");
        }}
      >
        <div style={{ padding: 5, fontSize: 15 }}>{"RESUME"}</div>
      </Button>
    </div>
  );
}

export default Home;
