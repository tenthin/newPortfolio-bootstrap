import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="tt-content">
      <div className="tt-content-card card">
          <h3>
            <b>C</b>ontact
          </h3>
      <div className="contact-form">
        <div className="row g-2">
          <div className="col-md">
            <div className="form-floating">
              <input
                type="name"
                className="form-control"
                id="floatingInputNameGrid"
                placeholder="Your Name"
              />
              <label htmlFor="floatingInputGrid">Your Name</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInputEmailGrid"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputGrid">Email address</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <button type="button" class="btn btn-primary ">
        Send
      </button>
      </div>
    </div>
  );
}
