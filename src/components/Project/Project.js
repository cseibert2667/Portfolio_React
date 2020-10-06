import React from "react";
import projects from "./projects.json";
import "./Project.css";

export default function Project() {
  return projects.map((proj) => (
    <div class="card">
      <img src={require(`../../assets/project-previews/${proj.image}`)} class="card-img-top" alt={proj.title} />
      <div class="card-body">
        <h5 class="card-title">{proj.title}</h5>
        <p class="card-text">
          Description
        </p>
        <a href={proj.repo} class="btn btn-primary">
          GitHub Repo
        </a>
        <a href={proj.live} class="btn btn-primary">
          Deployed Site
        </a>
      </div>
    </div>
  ));
}
