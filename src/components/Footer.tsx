import React from "react";
import { myNavy } from "../MyLibrary/MyColors";
import { Text } from "../MyLibrary";

function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: myNavy }}>
        <Text
          style={{
            fontFamily: "SFMono-Regular",
            fontSize: 12,
            textAlign: "center",
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          &copy; 2022 by Yijing Wu.
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
