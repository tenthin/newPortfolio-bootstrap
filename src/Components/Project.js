import React from "react";
import "./Project.css";
import project1 from "../image/tsewangshop-netlify.png";
import project2 from "../image/project2.png";

export default function Project() {
  return (
    <div className="tt-content">
      <div className="tt-content-card card">
        <h3>
          <b>P</b>roject
        </h3>
      <div className="project-body row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card" id="img-card">
            <div className="img-container">
              {/* <img
                src={project1}
                id="tsewangs-shop"
                className="card-img-top"
                alt="..."
              /> */}
              <img src={project1} class="img-thumbnail" alt="..."></img>
            </div>
            <div className="card-body">
              <h5 className="title">Tsewangs Shop</h5>
              {/* <p className="card-text">
                A site to display all the products that are sold in batches.
                Customer can check the products through the list and contact the
                seller through contact number and negotiate the price.
              </p> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" id="img-card">
            <div className="img-container">
              {/* <img
              src={project2}
              id="checkout-store"
              className="card-img-top"
              alt="..."
            /> */}
              <img src={project2} class="img-thumbnail" alt="..."></img>
            </div>
            <div className="card-body">
              <h5 className="card-title">Shopping Cart</h5>
              {/* <p className="card-text">
                A site to display all the products that are sold in batches.
                Customer can check the products through the list and contact the
                seller through contact number and negotiate the price.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
