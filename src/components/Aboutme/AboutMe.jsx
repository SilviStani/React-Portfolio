import "./AboutMe.scss";
import { aboutMe } from "../../aboutMe.js";

export default function AboutMe() {
  return (
    <div className="AboutMe" id="QuienSoy">
      <h1 className="h1">Sobre Mi</h1>
      <div className="Container" id="My_Life">
        {aboutMe.map((i) => (
          <div className="ContainerB">
            <img src={i.img} alt={i.alt} className="bitmojis" />

            <details className="desc">
              <summary className="h2">{i.title}</summary>
              <p className="p">{i.desc}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}