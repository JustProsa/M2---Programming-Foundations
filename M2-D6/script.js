//Esercizio 7

function changeTitleText(newText) {
  let titleElement = document.querySelector("h1.title");
  if (titleElement) {
    titleElement.textContent = newText;
  }
}

changeTitleText("Ma sti microfoni?");

//Esercizio 8

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

changeBackgroundColor("white");

//Esercizio 9

//Esercizio 10

function addClassToLinks(classe) {
  const links = document.getElementsByClassName("amazon");
  for (const link of links) {
    link.classList.add(classe);
  }
}

addClassToLinks("blue-color");

//Esercizio 11

//Esercizio 12
