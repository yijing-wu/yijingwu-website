import React from "react";

import { Button, Text } from "../MyLibrary";
import {
  myTextGrey,
  myMilkYellowC0Alpha,
  myMintGreen,
} from "../MyLibrary/MyColors";
import { myName, myBriefIntro } from "../assets/myData";

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
      <div style={{ width: "60%", marginBottom: 30 }}>
        <Text style={{ fontSize: 22, color: myTextGrey, lineHeight: 1.3 }}>
          {myBriefIntro}
        </Text>
      </div>
      <Button>
        <div style={{ padding: 5, fontSize: 15 }}>{"RESUME"}</div>
      </Button>
    </div>
  );
}

export default Home;
