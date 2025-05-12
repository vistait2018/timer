let incrementByOne = document.getElementById("increment-by-one");
let incrementByTwo = document.getElementById("increment-by-two");
let incrementByThree = document.getElementById("increment-by-three");
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
disableIncrement()
 let seconds = 0;
  let timerInterval = null;

function increaseHomeByOne() {
  let noToIncrement = Number.parseInt(homeScore.innerText);
  noToIncrement += 1;
  homeScore.textContent = noToIncrement;
}

function increaseHomeByTwo() {
  let noToIncrement = Number.parseInt(homeScore.innerText);
  noToIncrement += 2;
  homeScore.textContent = noToIncrement;
}

function increaseHomeByThree() {
  let noToIncrement = Number.parseInt(homeScore.innerText);
  noToIncrement += 3;
  homeScore.textContent = noToIncrement;
}

function increaseGuestByOne() {
  let noToIncrement = Number.parseInt(guestScore.innerText);
  noToIncrement += 1;
  guestScore.textContent = noToIncrement;
}

function increaseGuestByTwo() {
  let noToIncrement = Number.parseInt(guestScore.innerText);
  noToIncrement += 2;
  guestScore.textContent = noToIncrement;
}

function increaseGuestByThree() {
  let noToIncrement = Number.parseInt(guestScore.innerText);
  noToIncrement += 3;
  guestScore.textContent = noToIncrement;
}

  function updateDisplay() {
    let time = formatTime(seconds)
    document.getElementById('timer').textContent = time ;
  }
  function startTimer() {
    if (timerInterval) return; // prevent multiple intervals
    timerInterval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    enableIncrement()
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    disableIncrement()
  }

  function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
    disableIncrement()
  }

  function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Add leading zero if needed (e.g. 03:05:09)
  const formatted = [
    hrs.toString().padStart(2, '0'),
    mins.toString().padStart(2, '0'),
    secs.toString().padStart(2, '0')
  ].join(':');

  return formatted;
}

function disableIncrement(){
  const buttons = document.getElementsByClassName('increment-button');
for (let btn of buttons) {
  btn.disabled = true;
}
   
}

function enableIncrement(){
  const buttons = document.getElementsByClassName('increment-button');
for (let btn of buttons) {
  btn.disabled = false;
}
   
}