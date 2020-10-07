import React from "react";
import AboutText from "../AboutText/AboutText"
import "./About.css"
import Links from "../Links/Links"

export default function About() {
  return (
    <div class="container-index float-left ml-4 my-5">
      <h1><b>About Me</b></h1>
      <Links />
      <hr class="my-3" />
      <div class="row">
        <div class="col">
        <AboutText />
        </div>
      </div>
    </div>
  );
}
