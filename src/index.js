import generateQuotes from "./generateQuotes";
import "./styles/main.scss";

const jokeBtn = document.getElementById("quoteBtn");

jokeBtn.addEventListener("click", generateQuotes);

generateQuotes();
