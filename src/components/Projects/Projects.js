import React from "react";
import { Link } from "react-router-dom";

import "./Projects.scss";

function Projects() {
  const map = [
    {
      id: 1,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project",
    },
    {
      id: 2,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project",
    },
    {
      id: 3,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project",
    },
    {
      id: 4,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project",
    },
    {
      id: 5,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project",
    },
    {
      id: 6,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project",
    },
    {
      id: 7,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project",
    },
    {
      id: 8,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project",
    },
  ];
  const map2 = map.map((a) => (
    <div className="each_part" key={a.id}>
      <Link to="">
        <div className="in_wrapper">
          <div className="main_text">
            <h3>{a.title1}</h3>
          </div>
          <div className="hiidden_text">
            <p>
             {a.title2}
            </p>
            <Link to={a.url}>LOYIHANI KO'RISH</Link>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="projects">
      <div className="wrapper">
      {map2}
      </div>
    </div>
  );
}

export default Projects;
