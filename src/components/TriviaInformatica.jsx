import React, { useState, useRef, useEffect } from "react";
import "../styles/triviahuergo.scss";
import Progress from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import Aos from "aos";
import "aos/dist/aos.css";

function TriviaInformatica() {
  const questions = [
    {
      question: "¿Qué significa HTML?",
      answers: [
        "Hyper Text Modify Language",
        "Hyper Text Markup Language",
        "Hyper Total Modify Language",
        "Hyper Text Modifier Language",
      ],
      correct: "Hyper Text Markup Language",
    },
    {
      question: "¿Cuándo se creó la primera computadora?",
      answers: ["1945", "1943", "1948", "1942"],
      correct: "1945",
    },
    {
      question: "¿Por qué el creador de Python le puso dicho nombre?",
      answers: [
        "Su animal favorito",
        "Un grupo de comedia que le gustaba",
        "Su pelicula preferida",
        "El nombre de su mascota",
      ],
      correct: "Un grupo de comedia que le gustaba",
    },
    {
      question: "Qué significa UI?",
      answers: [
        "Lo que el usuario ve",
        "Lo que el usuario siente",
        "User Inteligence",
        "Unique Identifier",
      ],
      correct: "Lo que el usuario ve",
    },
    {
      question:
        "Qué es lo que está mal en este código escrito en C#? --> string text = '5' ",
      answers: [
        "Le falta el ;",
        "No es posible guardar un numero dentro de un string",
        "No se utilizan comillas simples",
        "El codigo esta bien escrito",
      ],
      correct: "Le falta el ;",
    },
    {
      question: "Qué es GANTT?",
      answers: [
        "Método de planeación para buscar el camino crítico",
        "Paradigma de programación",
        "Lenguaje de programación",
        "Método de planeación",
      ],
      correct: "Método de planeación",
    },
    {
      question:
        "Cuál es el formato utilizado en las fechas de las bases de datos?",
      answers: ["yyyy-dd-MM", "YYYY-DD-MM", "yyyy-MM-dd", "yyyy-mm-dd"],
      correct: "yyyy-MM-dd",
    },
    {
      question: "En cuál de estos lenguajes es posible utilizar POO?",
      answers: ["QBasic", "Assembler", "Ruby", "Fortran"],
      correct: "Ruby",
    },
    {
      question: "Cuál lenguaje es más rapido?",
      answers: ["Java", "C++", "Python", "C#"],
      correct: "C++",
    },
    {
      question: "Cuántas columnas hay en una fila de Bootstrap?",
      answers: ["8", "16", "12", "6"],
      correct: "12",
    },
    {
      question: "Cuántos KB hay en 1 GB?",
      answers: ["1.048.576", "512.512", "1.024.512", "1.024.256"],
      correct: "1.048.576",
    },
    {
      question: "Cuántos Bits hay en un Byte",
      answers: ["1", "16", "8", "12"],
      correct: "8",
    },
    {
      question: "Cuál de estas topologías de red no existe?",
      answers: ["LAN", "NAN", "WAN", "PAN"],
      correct: "NAN",
    },
    {
      question: "Cuál relación es la que nunca se tiene que utilizar?",
      answers: ["1 a 1", "1 a M", "M a 1", "M a M"],
      correct: "M a M",
    },
    {
      question: "Cuantas capas tiene el Modelo OSI:",
      answers: ["4", "7", "5", "8"],
      correct: "7",
    },
    {
      question: "En qué año se implementó por primera vez el sistema hexadecimal?",
      answers: ["1959", "1962", "1963", "1958"],
      correct: "1963",
    },
    {
      question: "Qué significa CPU?",
      answers: ["Central Processing Unit", "Central Package Unity", "Control Panel Unit", "Control panel Unity"],
      correct: "Central Processing Unit",
    },
    {
      question: "En qué año se publicó la primera versión de Windows?",
      answers: ["1988", "1985", "1991", "1989"],
      correct: "1985",
    },
    {
      question: "Que es una FK?",
      answers: ["Una Clave Foranea", "Un identificador primario", "Una Clave unica de relación", "Ninguna de las anteriores"],
      correct: "Una Clave Foranea",
    },
    {
      question: "Cual es el mayor numero de un tipo de dato INT en C/C++",
      answers: ["2145972925", "2147483650", "2146891274", "2147483647"],
      correct: "2147483647",
    },
  ];
  Aos.init({ duration: 1000, offset: 0, once: true });
  const navigate = useNavigate();
  const [numero, setNumero] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [score, setScore] = useState(0);
  const pageRef = useRef();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [preguntas] = useState(questions.slice(0, 10).sort(() => Math.random() - 0.5));
  
  const siguiente = (resp) => {
    for (let i = 1; i < 33; i++) {
      setTimeout(
        () => (pageRef.current.style.opacity = 1 - 0.03125 * i),
        8 * i
      );
    }
    setTimeout(() => setNumero(numero + 1), 256);
    setTimeout(() => setPercentage(percentage + 10), 256);
    for (let i = 1; i < 33; i++) {
      setTimeout(
        () => (pageRef.current.style.opacity = 0 + 0.03125 * i),
        256 + 8 * i
      );
    }
    resp === 1 && setScore(score + 1);
  };
  useEffect(() => {
    if (numero < 10) {
      let timer = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  });
  return (
    <div className="homePage">
      <div className="progress-timer" data-aos='fade-up'>
        <Progress percentage={percentage} />
      </div>
      <div ref={pageRef}>
        {numero < 10 ? (
          <React.Fragment>
            <div className="textHuergo">
              <h1 data-aos='fade-up'>Trivia Informatica</h1>
              <h2 data-aos='fade-up'>Pregunta {numero + 1}</h2>
            </div>
            <div className="question">
              <Question question={preguntas[numero]} siguiente={siguiente} />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="textHuergo">
              <h1>Trivia Informatica</h1>
              <h2>{score >= 8 ? "Ganaste!" : "Perdiste..."}</h2>

              <h2 className="finalText">
                Respondiste correctamente el {score * 10}% de las preguntas
              </h2>
              <h2>
                Tu tiempo fue de {minutes < 10 && "0"}
                {minutes}:{seconds < 10 && "0"}
                {seconds}
              </h2>
              <h2>
                {score < 8 ? "No te llevas nada..." : "Te llevas el premio!"}
              </h2>
              <button
                className="btnHome"
                onClick={() => navigate("../", { replace: true })}
              >
                Volver al Inicio
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default TriviaInformatica;
