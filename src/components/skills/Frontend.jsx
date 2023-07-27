import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frondtend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i
              class="bx bxl-html5 skill__icons"
              style={{ color: "orangered" }}
            ></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-css3 skill__icons" style={{ color: "blue" }}></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i
              class="bx bxl-javascript skill__icons"
              style={{ color: "#F6BE00" }}
            ></i>

            <div>
              <h3 className="skills__name">JAVASCRIPT</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i
              class="bx bxl-bootstrap skill__icons"
              style={{ color: "#8a2be2" }}
            ></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i
              class="bx bxl-github skill__icons"
              style={{ color: "black" }}
            ></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i
              class="bx bxl-react skill__icons"
              style={{ color: "#56B5F0" }}
            ></i>
            <div>
              <h3 className="skills__name">React.js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
