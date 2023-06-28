/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let simbolos = ["♦", "♥", "♠", "♣"];
  let simbolosAleatorios = simbolos[Math.floor(Math.random() * 4)];
  let valueCard = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "k",
    "A"
  ];

  let cartaAleatoria = valueCard[Math.floor(Math.random() * 13)];

  let header = document.querySelector(".header");
  header.innerHTML = simbolosAleatorios;

  let footer = document.querySelector(".footer");
  footer.innerHTML = simbolosAleatorios;

  let body = document.querySelector(".body");
  body.innerHTML = cartaAleatoria;

  let rojoYnegro = "";

  if (simbolosAleatorios === "♦" || simbolosAleatorios === "♥") {
    rojoYnegro = "colorred";
  } else {
    rojoYnegro = "colorblack";
  }

  let currentClass = header.classList[1];
  header.classList.remove(currentClass);
  header.classList.add(rojoYnegro);
  footer.classList.remove(currentClass);
  footer.classList.add(rojoYnegro);
};
