import axios from "axios";
function generateQuotes() {
  const apiKey = "qcqH299ErQsoJ6IgJ7Tu/A==Hz6ijhEPlyosewkG";
  const config = {
    headers: { "X-Api-Key": apiKey },
  };
  axios
    .get("https://api.api-ninjas.com/v1/quotes?category=computers", config)
    .then((res) => {
      document.getElementById("joke").innerHTML = res.data[0].quote;
    });
}

export default generateQuotes;
