const btnNext = document.querySelector(".btn");
const joke1 = document.querySelector(".card-text");

const btns = document.getElementsByClassName(".btns");
const bad = document.querySelector(".btnBad");
const regular = document.querySelector(".btnRegular");
const good = document.querySelector(".btnGood");

async function handleClick() {
  const { joke } = await fetchJoke();
  joke1.textContent = joke;
  console.log(joke);
}
//esta función se llama abajo sin paréntesis handleClick.
btnNext.addEventListener("click", handleClick);

async function fetchJoke() {
  //Esta función ejecutará el llamado a la Api.
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  //console.log(response);
  return response.json();
}
fetchJoke();

const reportAcudits = [];
//rate según smile.
function noteJoke1() {
  console.log(joke1);
  let date = new Date();
  date.toISOString();
  reportAcudits.push({
    joke: joke1.textContent,
    rate: 1,
    date: date,
  });

  console.log(reportAcudits);
}
function noteJoke2() {
  let date = new Date();
  date.toISOString();
  reportAcudits.push({
    joke: joke1.textContent,
    rate: 2,
    date: date,
  });

  console.log(reportAcudits);
}
function noteJoke3() {
  let date = new Date();
  date.toISOString();
  reportAcudits.push({
    joke: joke1.textContent,
    rate: 3,
    date: date,
  });

  console.log(reportAcudits);
}
//evento por cada smile.
bad.addEventListener("click", noteJoke1);
regular.addEventListener("click", noteJoke2);
good.addEventListener("click", noteJoke3);

function showDiv() {
  document.getElementById("btnBad").style.opacity = "100";
  document.getElementById("btnRegular").style.opacity = "100";
  document.getElementById("btnGood").style.opacity = "100";
}
