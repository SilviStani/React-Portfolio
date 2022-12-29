import "./AboutMe.scss";
import {aboutMe} from '../../aboutMe.js';
import { useState } from "react";

export default function AboutMe() {
    return (
        <div className="AboutMe" id="QuienSoy">
            <h1 className="h1">¿Quién Soy?</h1>
        <div className="ho" id="My_Life">
            <div className="border">
            { aboutMe.map((i) => (
                <div className="ContainerB">
                    <div className="itemB">
                        <img src={i.img} alt={i.alt} className="bitmojis"/>
                      <div className="desc">
                        <h2 className="h2">
                            {i.title}
                        </h2>
                        <p className="p"> <br />
                            {i.desc}
                        </p>
                      </div>
                    </div>
                </div>
              ))
            }
            </div>
        </div>
        </div>
    )
}
