import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i
              class="bx bxl-nodejs skill__icons"
              style={{ color: "green" }}
            ></i>
            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i
              class="bx bxl-firebase skill__icons"
              style={{ color: "#FFD700		" }}
            ></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i
              class="bx bxl-nodejs skill__icons"
              style={{ color: "black" }}
            ></i>
            <div>
              <h3 className="skills__name">Express.js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i
              class="bx bxl-mongodb skill__icons"
              style={{ color: "green" }}
            ></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
