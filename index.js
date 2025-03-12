// script.js
document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.getElementById("timer-display");
    const inputSeconds = document.getElementById("input-seconds");
    const startButton = document.getElementById("start-button");
    let countdownInterval;


   
    // Function to format seconds into MM:SS format
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
 
    // Function to start the countdown
    function startCountdown() {
      clearInterval(countdownInterval);
      let remainingTime = parseInt(inputSeconds.value);
 
      if (isNaN(remainingTime) || remainingTime <= 0) {
        alert("Please enter a positive number of seconds.");
        return;
      }
 
      timerDisplay.textContent = formatTime(remainingTime);
 
      countdownInterval = setInterval(() => {
        remainingTime--;
 
        if (remainingTime >= 0) {
          timerDisplay.textContent = formatTime(remainingTime);
        } else {
          clearInterval(countdownInterval);
          timerDisplay.textContent = "00:00";
          alert("Time's up!");
          inputSeconds.value = ""; // Clear the input field after timer completes
        }
      }, 1000);
    }
 
    startButton.addEventListener("click", startCountdown);
  });
