let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hex = document.getElementById("change").addEventListener("click", changeColor);
let nameColor = document.querySelector(".nameColor");

function changeColor() {
  let hashtag = "#"; 

  for (let i = 0; i < 6; i++) {
    hashtag += colors[randomValue()]
  }

  nameColor.textContent = hashtag;
  document.body.style.backgroundColor = hashtag;
};

function randomValue() {
  return Math.floor(Math.random() * colors.length)
}