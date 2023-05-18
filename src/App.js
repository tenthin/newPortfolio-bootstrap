import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Data from "./Components/Data/Data";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Bio from "./Components/Bio";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      {/* <Logo /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-2 p-0">
            <Navbar />
          </div>
          <div className="col-md-4 text-center p-0">
            <Profile />
          </div>
          <div className="col-md-6">
            {/* <BrowserRouter> */}
            <Routes>
              <Route path="/" element={<Bio />} />
              <Route path="/aboutme" element={<Bio />} />
              <Route path="/project" element={<Project />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* </BrowserRouter> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
