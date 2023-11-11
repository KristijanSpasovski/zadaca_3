let counter = 0;
let colors = ["red", "green", "blue", "yellow"];

function onClick() {
  //Equvalent expressions counter = counter + 1; counter += 1;
  let n = colors.length;
  let currentColour = colors[counter % n];
  counter++;
  document.body.style.backgroundColor = currentColour;
  console.log(counter);
}

function onReverseClick() {
  let n = colors.length;
  counter = (counter - 1 + n) % n;
  let currentColour = colors[counter];
  document.body.style.backgroundColor = currentColour;
  console.log(counter);
}

const changeColorBtn = document.querySelector("#changeColorBtn");
const reverseColorBtn = document.querySelector("#reverseColorBtn");

changeColorBtn.addEventListener("click", onClick);
reverseColorBtn.addEventListener("click", onReverseClick);
