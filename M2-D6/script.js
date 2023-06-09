//Esercizio 7

function changeTitleText() {
  let titleElement = document.querySelector("h1.title");
  let footerTitleElement = document.querySelector("p.shop");

  if (
    titleElement.innerHTML === "Ma sti microfoni?" &&
    footerTitleElement.innerHTML === "Ma sti microfoni?"
  ) {
    (titleElement.innerHTML = "Mic4Voices - Rode") &&
      (footerTitleElement.innerHTML = "Mic4Voices - Rode");
  } else {
    (titleElement.innerHTML = "Ma sti microfoni?") &&
      (footerTitleElement.innerHTML = "Ma sti microfoni?");
  }
}

// changeTitleText("Ma sti microfoni?");

//Esercizio 8

function changeBackgroundColor() {
  let body = document.body;
  body.style.backgroundColor === "white" || body.style.backgroundColor === ""
    ? (body.style.backgroundColor = "#9a252f")
    : (body.style.backgroundColor = "white");
}

//Esercizio 9

function changeAddress() {
  let address = document.querySelector("p.address");
  address.innerHTML === "Via Clippo Male, 125db, Cardioide (MIC)"
    ? (address.innerHTML = "Via Microfoni Belli, 4, Microfolandia (MIC)")
    : (address.innerHTML = "Via Clippo Male, 125db, Cardioide (MIC)");
}

//Esercizio 10

function addClassToLinks() {
  const links = document.getElementsByClassName("logo");
  for (const link of links) {
    link.classList.contains("red-color")
      ? link.classList.remove("red-color")
      : link.classList.add("red-color");
  }
}

//Esercizio 11

function invisibleImages() {
  const images = document.getElementsByClassName("imagine");
  for (const imagine of images) {
    imagine.classList.contains("invisible")
      ? imagine.classList.remove("invisible")
      : imagine.classList.add("invisible");
  }
}

//Esercizio 12

function changeColorPrice() {
  const prices = document.getElementsByClassName("cost");

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = `rgb(${red}, ${green}, ${blue})`;

  for (const price of prices) {
    price.style.color = color;
  }
}
