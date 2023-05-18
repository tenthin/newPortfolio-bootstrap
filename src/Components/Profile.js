import React from "react";
import "./Profile.css";
import brightness from "../image/brigtness.jpg";
import oldman from "../image/oldman.jpg";
import oldman1 from "../image/oldman1.jpg";

export default function Profile() {
  return (
    <div className="profile-card">
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={brightness} className="d-block img-fluid" alt="" />
            </div>

            <div className="carousel-item">
              <img src={oldman} className="d-block img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={oldman1} className="d-block img-fluid" alt="" />
            </div>
          </div>
        </div>
        {/* <div className="mypic">
          <img src={oldman} alt="" />
        </div> */}
        <div className="card-body">
          <h3 className="title" id="name">
            Tenzin Thinley
          </h3>
          <p className="card-text" id="job">
            Frontend Developer
          </p>
        </div>

        <div className="card-body">
          <a href="/" className="card-link">
            Download Resume
          </a>
          <a href="/" className="card-link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
