import React, { useLayoutEffect } from "react";

import { BackButton, Text } from "../MyLibrary";
import { myMilkYellow, myTextLightGrey } from "../MyLibrary/MyColors";

export default function EEG() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="project-page">
      <BackButton />
      <Text style={{ fontSize: 20, color: myTextLightGrey }}>
        <h1 style={{ color: myMilkYellow, marginTop: 30 }}>
          Classification of EEG Signals during Working Memory Maintenance
        </h1>
      </Text>
    </div>
  );
}
