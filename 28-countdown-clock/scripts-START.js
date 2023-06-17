const time_left = document.querySelector(".display__time-left");
const end_time = document.querySelector(".display__end-time");
const time_box = document.querySelectorAll(".timer__button");


// time_left.textContent = 3.11;
let countDown;
function timer(seconds) {
    // clear any interval that maybe be working when new one clicks
    clearInterval(countDown);
  // const now = Date.now();
  const then = Date.now() + seconds * 1000;
  displayEndTime(then);
  displayTimeLeft(seconds);
  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainSeconds = seconds % 60;
  const display = `${minutes}:${(remainSeconds<10)?('0'):('')}${remainSeconds}`;
  time_left.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
//   We can get a date with our Date.now() time stamp
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const second = end.getSeconds();
//   if minute is less than 10, we are adding additional 0 in front
  end_time.textContent = `Be back at ${hour}:${minutes<10?('0'):('')}${minutes}:${second<10?('0'):('')}${second}`;
}

time_box.forEach((box) => {
  box.addEventListener("click", (e) => {
    // console.log(e.dataset.time);
    const time = box.getAttribute("data-time");
    timer(time);
  });
});

document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
   const minute  = this.minutes.value;
   console.log(minute);
    const seconds = minute*60;
    this.reset();
    timer(seconds);
});