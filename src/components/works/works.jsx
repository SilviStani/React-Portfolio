import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currenteSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: 3,
      title: "Portfolio",
      web: "react-portfolio-silvistani.vercel.app",
      img: "https://user-images.githubusercontent.com/90510746/206809662-801fbf30-7ab4-48f7-bb2d-e39e84cdb0e7.png",
      src: " https://github.com/SilviStani/React-Portfolio",
      desc: "Pequeña descripción de mis trabajos y mis pasiones.",
    },
    {
      id: 9,
      title: "Walter Tapizados",
      web: "https://limpieza-tapizados-walter.vercel.app/",
      img: "/assets/Walter-tapizados.png",
      alt: "Web limpieza de tapizados en Chaco y Corrientes",
      src:"https://github.com/SilviStani/Limpieza-Tapizados-Walter",
    },
    {
      id: 6,
      title: "Estetyczna Nadja Szewska",
      web: "https://estetyczna-nadja-szewska.vercel.app/",
      img: "/assets/introPage.jpg",
      src: "https://github.com/SilviStani/Estetyczna-Nadja-Szewska",
      desc: "SPA de Estética corporal y facial. Servicio de belleza integral.",
    },
    {
      id: 7,
      title: "Delicias y Manjares",
      web: "https://deliciasymanjares.vercel.app/",
      img: "/assets/3.jpg",
      src: "https://github.com/SilviStani/deliciasymanjares",
      desc: "Las delicias mas exquisitas y frescas de todo Escobar. No dudes en probar :)",
    },
    {
      id: 8,
      title: "Cabañas Mirsú",
      web: "https://cabanasmirsu.vercel.app",
      img: "/assets/Cabanias-mirsu.png",
      src: "https://github.com/SilviStani/cabanias_mirsu",
      desc: "Cabañas en Villa General Belgrano. Mapa de ubicación, links a sitios de interés, sitios de necesidad.",
    },
    {
      id: 1,
      title: "VIPets",
      img: "https://user-images.githubusercontent.com/90510746/160607183-5527d9ec-bacf-458f-a48c-d89459f00a81.png",
      src: "https://github.com/Navito-py/PF-PuppyPalace",
      desc: "Spa Exclusivamente pensada en nuestras queridas mascotas. Vipets ofrece un acceso rápido a las clinicas 24 hs.",
    },
    {
      id: 2,
      title: "Food*HenryApp",
      img: "https://user-images.githubusercontent.com/90510746/155239699-a0ab095e-cfb3-4a32-8756-e1f3b9e4d948.jpg",
      src: "https://github.com/SilviStani/Pi-Food",
      desc: "SPA creada como Proyecto individual, en la etapa final de 'Soy Henry Academy'. Aqui es donde aplicamos las skills que hemos aprendido en el bootcamp",
    },
    {
      id: 4,
      title: "Chronometer",
      img: "https://user-images.githubusercontent.com/90510746/148205845-1f650bfd-15ad-433c-839d-962786b50e83.png",
      src: "https://github.com/SilviStani/Chronometer-Countdown-Timer",
      desc: "A Single & Simple Chronometer pure redux",
    },

    {
      id: 5,
      title: "TodoList: Vacation",
      img: "https://user-images.githubusercontent.com/90510746/148145113-25ef5a46-17d7-4c5f-b9e0-07716ffc0b02.png",
      src: "https://github.com/SilviStani/Vacation-TodoList",
      desc: "Una Todo list creada a puro vanilla javascript. Sus efectos y estilos en Css.",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(
          currenteSlider > 0 ? currenteSlider - 1 : data.length - 1
        )
      : setCurrentSlider(
          currenteSlider < data.length - 1 ? currenteSlider + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <h1>Proyectos y Trabajos</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currenteSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
            <div className="left">
              <div className="leftContainer">
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>
                  <a
                    href={d.src}
                    className=" a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Código Github
                  </a>
                </span>
                {d.web ? (
                  <span>
                    <a
                      href={d.web}
                      className="a"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Web Link
                    </a>
                  </span>
                ) : (
                  <br />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
