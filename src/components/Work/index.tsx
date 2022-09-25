import React from "react";
import { Title } from "../../MyLibrary";
import FeaturedProject from "./FeaturedProject";

function Work() {
  return (
    <div
      id="work"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <Title
        index={3}
        content={"Some Things I’ve Built"}
        style={{ marginBottom: 40 }}
      />
      <FeaturedProject />
    </div>
  );
}

export default Work;
