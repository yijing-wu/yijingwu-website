import React from "react";

import Grid from "@mui/material/Grid";

import ProfilePhoto from "../assets/ProfilePhoto.png";
import { Text, Title } from "../MyLibrary";
import { myTextGrey, myMintGreenC0Alpha } from "../MyLibrary/MyColors";

function Paragraph1() {
  return (
    <Text style={{ fontSize: 20, color: myTextGrey, marginTop: 10 }}>
      {
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat. Felis bibendum ut tristique et. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Consequat mauris nunc congue nisi vitae suscipit tellus. Sed libero enim sed faucibus turpis in. Eget est lorem ipsum dolor sit amet consectetur adipiscing. "
      }
    </Text>
  );
}

function Paragraph2() {
  return (
    <Text style={{ fontSize: 20, color: myTextGrey, marginTop: 10 }}>
      {
        "Aliquam nulla facilisi cras fermentum odio eu feugiat. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Augue interdum velit euismod in pellentesque. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. A arcu cursus vitae congue mauris. "
      }
    </Text>
  );
}

function Paragraph3() {
  return (
    <Text style={{ fontSize: 20, color: myTextGrey, marginTop: 10 }}>
      {
        "Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. "
      }
    </Text>
  );
}
function Paragraph4() {
  return (
    <Text
      style={{
        fontSize: 20,
        color: myTextGrey,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      {"Here are a few technologies I’ve been working with recently:"}
    </Text>
  );
}

const skillList = [
  "Java",
  "React",
  "JavaScript/TypeScript",
  "React Native",
  "Python",
  "Node.js",
];

function About() {
  return (
    <div
      id="about"
      style={{
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <Title index={1} content={"About Me"} />
      <Grid container>
        <Grid item xs={7}>
          <div
            style={{
              marginRight: 50,
            }}
          >
            <Paragraph1 />
            <Paragraph2 />
            <Paragraph3 />
            <Paragraph4 />
            <ul className="skills-list">
              {skillList.map((skill, index) => {
                return (
                  <li
                    key={"skill" + index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontSize: 14,
                      color: myMintGreenC0Alpha,
                      fontFamily: "SFMono-Regular",
                      marginBottom: 3,
                    }}
                  >
                    &nbsp;
                    {`${skill}`}
                  </li>
                );
              })}
            </ul>
          </div>
        </Grid>
        <Grid item xs={5}>
          <img
            src={ProfilePhoto}
            style={{
              width: 300,
              overflow: "hidden",
              borderRadius: "10%",
            }}
            alt="ProilePhoto"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
