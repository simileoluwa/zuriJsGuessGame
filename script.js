// const mainGame = document.getElementById("game");
const guessButton = document.getElementById("guessButton");
const guessNumbers = document.getElementById("guessNumber");
const guessResult = document.getElementById("result");
const minNumber = Math.ceil(1);
const maxNumber = Math.floor(100);
const randomNumber = Math.floor(
  Math.random() * (maxNumber - minNumber) + minNumber
);
console.log(randomNumber);
let userAttempts;

// const guessNumberValue = guessNumber.value;

guessButton.addEventListener("click", (e) => {
  e.preventDefault();
  let guessNumbersValue = guessNumbers.value;
  if (guessNumbersValue === randomNumber) {
    guessResult.textContent = `Your guess is correct. The number was ${randomNumber}`;
  } else if (guessNumbersValue > randomNumber) {
    guessResult.textContent = `Your guess is too high. The number was ${randomNumber}`;
  } else if (guessNumbersValue < randomNumber) {
    guessResult.textContent = `Your guess is too low. The number was ${randomNumber}`;
  }

  function restrictToNumbers(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
  }
  guessButtonSubmit.reset();
});
