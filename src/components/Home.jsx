import React from "react";
import "../styles/home.scss";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function home() {
  const navigate = useNavigate();
  Aos.init({ duration: 1200, offset: 0, once: true });
  return (
    <div className="homePage">
      <div className="homeTitle">
        <h1 data-aos="fade">Trivia Huergo</h1>
        <h2 data-aos="fade-right">
          Probá tus <span>conocimientos</span>
        </h2>
        <h2 data-aos="fade-right" data-aos-delay="100">
          Acerta <span>8 de 10 preguntas</span>
        </h2>
        <h2 data-aos='fade-right' data-aos-delay='200'>
          Llevate un <span>premio único </span>
        </h2>
      </div>
      <div className="homeButtons" data-aos-duration='2200' data-aos='fade'>
        <h2>
          Elegí entre una de estas dos <span>categorías</span>
        </h2>
        <button
          className="btnHome"
          onClick={() => navigate("../trivia/huergo", { replace: true })}
        >
          Huergo
        </button>
        <button
          className="btnHome"
          onClick={() => navigate("../trivia/informatica", { replace: true })}
        >
          Informática
        </button>
      </div>
      <div className="desc">
        <h3 data-aos='fade' data-aos-delay='400'>
          La categoría "Huergo" abarca temas como la estructura de la
          institución, su personal, su historia, entre otros datos curiosos que
          probablemente no sabías.
        </h3>
        <h3 data-aos='fade' data-aos-delay='600'>
          La categoría "Informática" abarca temas relacionados tanto con
          hardware como con software, que pueden ser respondidos por cualquier
          persona con algo de dificultad.
        </h3>
      </div>
    </div>
  );
}

export default home;
