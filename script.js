const currentYear = new Date().getFullYear();
const birthdayMonth = 8; // Change this to the birthday month (0-indexed)
const birthdayDay = 19;   // Change this to the birthday day

const birthday = new Date(currentYear, birthdayMonth, birthdayDay);
const nextBirthday = new Date(currentYear + 1, birthdayMonth, birthdayDay);
const birthdayMessageElement = document.getElementById("birthdayMessage");
const birthdayCanvasElement = document.getElementById("birthdayCanvas");

function isTodayBirthday(birthday) {
  const today = new Date();
  return today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth() && today.getFullYear() === birthday.getFullYear();
}

function updateCountdown() {
  const today = new Date();
  let diff;
  
  if (today > birthday) {
    diff = nextBirthday - today;
  } else {
    diff = birthday - today;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const timerElement = document.getElementById("timer");
  timerElement.innerHTML = `
    <div class="days">
      <div class="numbers">${days}</div>days
    </div>
    <div class="hours">
      <div class="numbers">${hours}</div>hours
    </div>
    <div class="minutes">
      <div class="numbers">${minutes}</div>minutes
    </div>
    <div class="seconds">
      <div class="numbers">${seconds}</div>seconds
    </div>
  `;

  if (isTodayBirthday(birthday)) {
    birthdayMessageElement.innerHTML = `<h1>Happy Birthday Amal!</h1>`;
    // Display birthday canvas or any other celebration animation here
  } else {
    birthdayMessageElement.innerHTML = "";
    // Clear birthday canvas or any other celebration animation here
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
