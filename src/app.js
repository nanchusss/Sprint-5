const btnNext = document.querySelector(".btn");
const joke1 = document.querySelector(".card-text");

const btns = document.querySelectorAll(".btns");
const bad = document.querySelector(".btnBad");
const regular = document.querySelector(".btnRegular");
const good = document.querySelector(".btnGood");

async function handleClick() {
  const { joke } = await fetchJoke();
  joke1.textContent = joke;
  console.log(joke);
  //creo que aquí debería ejecutar la función que muestra los 3 botones, de aquí sale el rate del chiste que se guarda en una variable que podría rate. Luego se va  a pushear al array de objetos con ese valor obtenido en la función. Mis preguntas serían: Cómo muestro por pantalla los 3 botones una vez que se haya dado click a Go!, porque tienen un display none, como hago para que cuando le doy click se ejecute la función que me muestra por pantalla los 3 botones?
  //También estoy segura de que no era necesario hacer una funcón por cada botón con smile, Línea 42 de este código, alguna sugerencia :) ?
  reportAcudits.push({
    joke: joke1.textContent,
    rate,
    date: new Date(),
  });
  console.log(reportAcudits);
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
  let rate = 1;
  console.log(rate);
}
function noteJoke2() {
  let rate = 2;
  console.log(rate);
}
function noteJoke3() {
  let rate = 3;
  console.log(rate);
}
//evento por cada smile.
bad.addEventListener("click", noteJoke1);
regular.addEventListener("click", noteJoke2);
good.addEventListener("click", noteJoke3);
