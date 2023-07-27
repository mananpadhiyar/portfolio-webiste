import React from "react";
import { PiArrowSquareOutBold } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <div className="work__button">
        <a href={item.live}>
          Live <PiArrowSquareOutBold className="live__icon" />
          {/* Demo <i className="bx bx-right-arrow-alt work__button-icon"></i> */}
        </a>
        <a href={item.github}>
          Github <BsGithub className="git__icon"></BsGithub>
        </a>
      </div>

      <p>{item.tag}</p>
    </div>
  );
};

export default WorkItem;
