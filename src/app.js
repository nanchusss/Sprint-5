const btnNext = document.querySelector(".btn");
const joke1 = document.querySelector(".card-text");

async function handleClick() {
  const { joke } = await fetchJoke();
  joke1.textContent = joke;
  console.log(joke);
}

btnNext.addEventListener("click", handleClick);

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  //   console.log(response);
  //   const joke = await response.json();
  //   console.log(joke);
  console.log(response);
  return response.json();
}
fetchJoke();
