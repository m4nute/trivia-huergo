import React from "react";
import Swal from "sweetalert2";
import "../styles/question.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Question(props) {
  Aos.init({ duration: 1000, offset: 0, once: true });
  const { question } = props;
  const comprobar = (e) => {
    e.target.innerText !== question.correct
      ? Swal.fire({
          icon: "error",
          title: "Incorrecto...",
          text: `La respuesta correcta era ${question.correct}`,
          showConfirmButton: true,
          confirmButtonText: "Siguiente",
        }).then((result) => {
          (result.isConfirmed || result.isDenied || result.isDismissed) &&
            props.siguiente(0);
        })
      : Swal.fire({
          position: "center",
          icon: "success",
          title: "Respuesta Correcta!",
          showConfirmButton: true,
          confirmButtonText: "Siguiente",
        }).then((result) => {
          (result.isConfirmed || result.isDenied || result.isDismissed) &&
            props.siguiente(1);
        });
  };
  return (
    <React.Fragment>
      <h1 className="title" data-aos='fade-up' data-aos-delay='200'>{question.question}</h1>
      <div className="answers">
        {question.answers.map((answer, index) => {
          return (
            <button data-aos='fade-up' data-aos-delay='200'
              className="answer"
              key={index}
              onClick={(e) => {
                comprobar(e);
              }}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Question;
