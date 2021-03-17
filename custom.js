var miliseconds = 00, seconds = 00, hours = 0;

var startButton;
var stopButton;
var resetButton;

window.onload = function () {
  startButton = document.getElementById("button-start");
  stopButton = document.getElementById("button-stop");
  resetButton = document.getElementById("button-reset");
  startButton.addEventListener("click", startTimer);
  stopButton.addEventListener("click", stopWatch);
  resetButton.addEventListener("click", resetWatch);
};

var miliSecondInterval;
function startTimer() {
  setInterval(miliSecondInterval)
  miliSecondInterval = setInterval(() => {
    miliseconds++;
    document.getElementById('miliseconds').innerHTML = milisecondIncremnt(miliseconds);
    disableButton(this);
    if (miliseconds == 300) {
      seconds++;
      document.getElementById('seconds').innerHTML = secondIncremnt(seconds);
      miliseconds = 0;
    }
  }, 1);
}
function milisecondIncremnt(n) {
  if (n > 0 && n < 100) {
    return "0" + n;
  } else {
    return n;
  }
}
function secondIncremnt(n) {
  return (n < 10) ? ("0" + n) : n;
}
function disableButton(btn) {
  document.getElementById(btn.id).disabled = true;
}
function stopWatch() {
  clearInterval(miliSecondInterval);
  document.getElementById('button-start').disabled = false;
}
function resetWatch() {
  miliseconds = 00, seconds = 00, hours = 0;
  document.getElementById('miliseconds').innerHTML = "00";
  document.getElementById('seconds').innerHTML = "00";
}