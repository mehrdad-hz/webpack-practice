import generateQuotes from "./generateQuotes";
import "./styles/main.scss";

const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateQuotes);

generateQuotes();
