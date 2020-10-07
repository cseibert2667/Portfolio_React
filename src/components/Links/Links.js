import React from "react";
import "./Links.css";
import Resume from "../../assets/resume.pdf"

export default function Links() {
  return (
    <div class="links">
      <a
        href="https://www.linkedin.com/in/cooper-seibert-6a15b31b0/"
        target="_blank" rel="noopener noreferrer"
      >
        LinkedIn
      </a>{" -- "}
      <a href="https://github.com/cseibert2667" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>{" -- "}
      <a href={Resume} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </div>
  );
}
