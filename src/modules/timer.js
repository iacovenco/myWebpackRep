const timer = (deadLine) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      timerHours.textContent = getTime.hours.toString().padStart(2, "0");
      timerMinutes.textContent = getTime.minutes.toString().padStart(2, "0");
      timerSeconds.textContent = getTime.seconds.toString().padStart(2, "0");
    } else {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
      clearInterval(timerInterval);
    }
  };

  updateClock();
  const timerInterval = setInterval(updateClock, 1000);
};

export default timer;
