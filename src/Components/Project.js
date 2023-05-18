import React from "react";
import "./Project.css";
import project1 from "../image/project1.png";
import project2 from "../image/project2.png";

export default function Project() {
  return (
    <div className="project-card">
      <div className="card-header" id="project-header">
        <h3>
          <b>P</b>roject
        </h3>
      </div>
      <div className="project-body row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={project1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tsewangs Shop</h5>
              <p className="card-text">
                A site to display all the products that are sold in batches.
                Customer can check the products through the list and contact the
                seller through contact number and negotiate the price.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={project2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Shopping Cart</h5>
              <p className="card-text">
                A site to display all the products that are sold in batches.
                Customer can check the products through the list and contact the
                seller through contact number and negotiate the price.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
