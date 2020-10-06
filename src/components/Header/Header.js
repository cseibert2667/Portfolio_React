import React from "react";
import "./Header.css"

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">
        Cooper Seibert
      </a>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="portfolio.html">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
