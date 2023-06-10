import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <>
      <div className="tt-content">
      <div className="tt-content-card card">
          <h3>
            <b>R</b>esume
          </h3>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td scope="col">Education</td>
              <td scope="col">
                <ul>
                  <li>
                    Banaras Hindu University (BHU) <br />
                    Master in Physics
                  </li>
                  <li>
                    St. Joseph of College of Arts/Science <br /> Bachelor in
                    Computer Science
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>Skills</td>
              <td>
                <tr>
                  <td>Programming Language</td>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>Bootstrap</li>
                  </ul>
                </tr>
                <tr>
                  <td>FrameWork</td>
                  <ul>
                    <li>React JS</li>
                  </ul>
                </tr>
              </td>
            </tr>
            <tr>
              <td>Language</td>
              <td>
                <ul>
                  <li>English</li>
                  <li>Tibetan</li>
                  <li>Hindi</li>
                </ul>
              </td>
            </tr>
            {/* <tr>
            <td>1</td>
            <td colspan="2">Larry the Bird</td>
          </tr> */}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
