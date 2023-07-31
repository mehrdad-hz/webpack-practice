import generateQuotes from "./generateQuotes";
import "./styles/main.scss";

const QuoteBtn = document.getElementById("quoteBtn");

QuoteBtn.addEventListener("click", generateQuotes);

generateQuotes();
