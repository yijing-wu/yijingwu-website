import React from "react";
import { FeaturedProjectsData } from "../../assets/projectsData";

import FeaturedProjectWidget from "./FeaturedProjectWidget";

export default function FeaturedProjects() {
  return (
    <div style={{}}>
      {FeaturedProjectsData.map((featuredProject, index) => {
        return (
          <FeaturedProjectWidget
            key={index}
            index={index}
            picture={featuredProject.picture}
            title={featuredProject.title}
            description={featuredProject.description}
            tools={featuredProject.tools}
            externalLink={featuredProject.externalLink}
            githubLink={featuredProject.githubLink}
            buttonLink={featuredProject.buttonLink}
          />
        );
      })}
    </div>
  );
}
