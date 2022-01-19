/* eslint-disable react-hooks/rules-of-hooks */
import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import {bootcamp} from "../../data.js";

export default function portfolio() {
    const [selected, setSelected] = useState("bootcamp");
    const [data, setData] =useState([]);
    const list = [
        {
            id: "bootcamp",
            title: "BootCamp",
          }
        ];

        useEffect(()=>{

            switch(selected){
                case "bootcamp":
                    setData(bootcamp);
                    break;
                    default:
                        setData(bootcamp);
            }

        },[selected] );

    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {
                   list.map((item)=>(
                       <PortfolioList
                       title = {item.title}
                       active = {selected === item.id }
                       setSelected={setSelected}
                       id={ item.id}
                       />
                   ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                    <img src = {d.img}
                     alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
                
            </div>
        </div>
    )
}

