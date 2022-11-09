import React, { useState, useRef, useEffect } from "react";
import "../styles/triviahuergo.scss";
import Progress from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import Aos from "aos";
import "aos/dist/aos.css";

function TriviaHuergo() {
  Aos.init({ duration: 1000, offset: 0, once: true });
  const questions = [
    {
      question: 'Qué significa la A de "Luis A. Huergo"?',
      answers: ["Armando", "Augusto", "Agustín", "Alfredo"],
      correct: "Augusto",
    },
    {
      question: "Cuándo empezó la especialidad de Computadoras?",
      answers: ["1972", "1959", "1971", "1988"],
      correct: "1988",
    },
    {
      question: "Dónde estaba el colegio antes del edificio de Perú 759?",
      answers: [
        "Chacabuco 629",
        "Chacabuco 291",
        "Chacabuco 1221",
        "Chacabuco 221",
      ],
      correct: "Chacabuco 629",
    },
    {
      question: "Cuántas aulas tenemos en total?",
      answers: ["41", "32", "29", "27"],
      correct: "32",
    },
    {
      question: "Cuántos docentes tiene aproximadamente el colegio?",
      answers: ["192", "222", "81", "144"],
      correct: "192",
    },
    {
      question: "Cuántos preceptores tiene el colegio?",
      answers: ["18", "21", "26", "12"],
      correct: "12",
    },
    {
      question:
        "Cuántas generaciones de directivos tenemos desde que se fundó el Huergo?",
      answers: ["3", "4", "6", "2"],
      correct: "3",
    },
    {
      question: "Cómo se llamaba la Rectora anterior a Estela?",
      answers: [
        "Celia Halpern",
        "Marcela Halpern",
        "Carla Halpern",
        "Mariana Halpern",
      ],
      correct: "Celia Halpern",
    },
    {
      question: "Cuántas horas promedio tiene el plan de estudios del Técnico?",
      answers: ["42", "47", "41", "51"],
      correct: "41",
    },
    {
      question: "Cuántos baños tiene el colegio?",
      answers: ["9", "11", "12", "6"],
      correct: "12",
    },
    {
      question: "Cuántas puertas tiene el colegio?",
      answers: ["271", "289", "Ninguna", "275"],
      correct: "275",
    },
    {
      question: "Cuántos vidrios tiene el colegio?",
      answers: ["300", "500", "210", "190"],
      correct: "500",
    },
    {
      question: "Cuántos pizarrones tiene el colegio?",
      answers: ["41", "49", "55", "47"],
      correct: "55",
    },
    {
      question: "Cuántos ventiladores de techo tiene el colegio?",
      answers: ["112", "121", "122", "150"],
      correct: "150",
    },
    {
      question:
        "Cuántos pasos hay que dar para llegar de la entrada al salón de actos?",
      answers: ["151", "150", "121", "124"],
      correct: "150",
    },
    {
      question:
        "Cuántos años tiene el colegio desde su apertura?",
      answers: ["88", "82", "64", "71"],
      correct: "88",
    },
    {
      question:
        "Cuál es el segundo nombre de Martín Malvasio?",
      answers: ["Elias", "Eduardo", "Esteban", "Ezequiel"],
      correct: "Esteban",
    },
    {
      question:
        "Cuántos alumnos tiene el colegio?",
      answers: ["1222", "901", "1054", "Ninguna de las anteriores"],
      correct: "Ninguna de las anteriores",
    },
    {
      question:
        "?",
      answers: ["1222", "901", "1054", "Ninguna de las anteriores"],
      correct: "Ninguna de las anteriores",
    },
  ];
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
        setSeconds(seconds + 1)
        if(seconds===59){
          setMinutes(minutes+1)
          setSeconds(0)
        }
      }, 1000)
      return ()=> clearInterval(timer)
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
              <h1 data-aos='fade-up' data-aos-delay='100'>Trivia Huergo</h1>
              <h2 data-aos='fade-up' data-aos-delay='200'>Pregunta {numero + 1}</h2>
            </div>
            <div className="question">
              <Question question={preguntas[numero]} siguiente={siguiente} />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="textHuergo">
              <h1>Trivia Huergo</h1>
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

export default TriviaHuergo;
