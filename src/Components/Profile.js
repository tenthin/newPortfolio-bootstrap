import React from "react";
import "./Profile.css";
import coder01 from "../image/coder01.jpg";
import coder02 from "../image/coder02.jpg";
import coder03 from "../image/coder03.webp";
import coder04 from "../image/coder04.jpg";
import coder05 from "../image/coder05.webp";
import myPhoto from "../image/profile-thinley.png";

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
              <img src={coder01} className="d-block img-fluid" alt="" />
            </div>

            <div className="carousel-item">
              <img src={coder02} className="d-block img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={coder03} className="d-block img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={coder04} className="d-block img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={coder05} className="d-block img-fluid" alt="" />
            </div>
          </div>
        </div>
        {/* <div className="mypic">
          <img src={oldman} alt="" />
        </div> */}
        <div className="card-body">
          <div class="profile-img"><img src={myPhoto} alt="Thinley" /></div>
          <h1 className="title" id="name">
            Tenzin Thinley
          </h1>
          <p className="card-text" id="job">
          <code>{`{`}</code> Frontend Developer <code>{`}`}</code>
          </p>
          <div class="social-icons">
            <a href="#" target="_blank"><i class="bi bi-github"></i></a>
            <a href="#" target="_blank"><i class="bi bi-linkedin"></i></a>
            <a href="#" target="_blank"><i class="bi bi-twitter"></i></a>
            <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>

          </div>
          

        </div>

        <div className="card-body-bottom">
          <a href="/" className="download">
          <span class="text">DOWNLOAD CV  </span>
          <i class="bi bi-paperclip"></i> 
          </a>
          <a href="/" className="hire-me">
          <span class="text">HIRE ME</span>
          <i class="bi bi-envelope-fill"></i> 
          </a>
        </div>
      </div>
    </div>
  );
}
