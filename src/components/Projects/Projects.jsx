import React from "react";

import algo from "./first.jpg";
import snake from "./second.png";
import library from "./third.jpg";

function Projects() {
  return (
    <div
      id="carousel-with-desc"
      className="carousel slide project"
      data-bs-ride="carousel"
      data-bs-touch="true"
      data-bs-interval="3000"
      data-ds-pause="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-6 project-img">
              <img
                src={algo}
                className="project-img"
                alt="Animated Sorting Algorithms"
              />
            </div>
            <div className="col-md-6 project-desc">
              <h5>Animated Sorting Algorithm</h5>
              <p>
                In this project using pygame and p5.js, working of different
                sorting algorithms such as Insertion Sort, Bubble Sort and Quick
                sort etc is animated to understand these algorithms in a better
                way.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-6 project-img">
              <img
                src={snake}
                className="project-img"
                alt="Snake Game using Pygame"
              />
            </div>
            <div className="col-md-6 project-desc">
              <h5>Snake Game using Pygame</h5>
              <p>
                Using python's library pygame to create a very well known game -
                snake, with the help of Object Oriented Concepts.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-6 project-img">
              <img
                src={library}
                className="project-img"
                alt="Library Management System"
              />
            </div>
            <div className="col-md-6 project-desc">
              <h5>Library Management System</h5>
              <p>
                Using C++, OOPs and file handling to create a GUI in turbo c to
                create a Library management system, that stores the information
                in binary files.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-with-desc"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-with-desc"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Projects;
