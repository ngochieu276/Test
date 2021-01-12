const userInput = document.querySelector(".userInput");
const results = document.querySelector(".results");
const checkBtn = document.querySelector(".checkBtn");

const randomNum = Math.floor(Math.random() * 10);

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let receivNumber = Number(userInput.value);
  checkNumber(receivNumber);
});
function checkNumber(value) {
  checkValid(value);
  if (value === randomNum) results.textContent = "Congrat";
  if (value !== randomNum) results.textContent = "Wrong";
}

function checkValid(input) {
  if (isNaN(input)) alert("Please number only");
  if (input > 10 || input < 0) alert("Just from 1-10");
}
