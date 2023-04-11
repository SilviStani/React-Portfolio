import React from "react";
import "./Works2.scss";
import Cards from "../Card/Cards";
import { bootcamp } from "../../data.js";
import TopBar from "../topbar/TopBar2";

const Works2 = () => {
  return (
    <div className="ContainerMax">
      <TopBar />
      <div className="Container">
        <h1 className="galery">Galeria</h1>
        <div className="cards">
          {bootcamp.map((e) => {
            return (
              <Cards
                className="card"
                id={e.id}
                title={e.title}
                img={e.img}
                desc={e.desc}
                web={e.web ? e.web : ""}
                src={e.src}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works2;
