import React from "react";
import "./Cards.scss";

const Cards = ({ id, desc, img, alt, web, src, title }) => {
  return (
    <div key={id} className="Cards">
      <p className="tit">{title}</p>
      <img src={img} alt={alt} className="img" />
      <div className="textCard">
        {web ? (
          <a className="a" href={web} target="_blank" rel="noopener noreferrer">
            <img src="/assets/www.png" alt="" height={30} className="logo" />{" "}
            Web
          </a>
        ) : (
          <br />
        )}

        <a className="a" href={src} target="_blank" rel="noopener noreferrer">
          <img src="/assets/githb.png" alt="" height={30} className="logo" />{" "}
          Github
        </a>
          <p className="a"><img className="logo" src="/assets/desc.png" alt="" height={30}/><p className="title">{desc}</p></p>
      </div>
    </div>
  );
};

export default Cards;
