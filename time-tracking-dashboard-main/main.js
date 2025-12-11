// Data fetching on page loading
async function fetchData() {
  try {
    const req = await fetch(
      "https://imhefizh.github.io/FrontEnd-Lab/time-tracking-dashboard-main/data.json"
    )
      .then((x) => x.json())
      .then((x) => (data = x));

    window.sessionStorage.setItem("data", JSON.stringify(req));
    return req;
  } catch (error) {
    console.log(error);
  }
}
fetchData(); // Initiator

// Set navigation state
let activeNav;
const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const MonthlyBtn = document.getElementById("monthly");

dailyBtn.addEventListener("click", (e) => setActiveNav(e.target.id));
weeklyBtn.addEventListener("click", (e) => setActiveNav(e.target.id));
MonthlyBtn.addEventListener("click", (e) => setActiveNav(e.target.id));

function setActiveNav(e = "daily") {
  dailyBtn.classList.add("sleep");
  weeklyBtn.classList.add("sleep");
  MonthlyBtn.classList.add("sleep");

  activeNav = e;
  populateData();
  const btn = document.getElementById(activeNav);
  btn.classList.remove("sleep");
}
setActiveNav(); // Initiator

// Data operation
const workHour = document.getElementById("work-hour");
const playHour = document.getElementById("play-hour");
const studyHour = document.getElementById("study-hour");
const exerciseHour = document.getElementById("exercise-hour");
const socialHour = document.getElementById("social-hour");
const selfcareHour = document.getElementById("selfcare-hour");

function populateData() {
  const data = JSON.parse(window.sessionStorage.getItem("data"));

  for (item of data) {
    const hour = document.getElementById(
      `${item.title.replace(" ", "").toLowerCase()}-hour`
    );
    const previous = document.getElementById(
      `${item.title.replace(" ", "").toLowerCase()}-previous`
    );
    switch (activeNav) {
      case "daily":
        hour.innerHTML = `${item.timeframes.daily.current}hrs`;
        previous.innerHTML = `Yesterday - ${item.timeframes.daily.previous}hrs`;
        break;
      case "weekly":
        hour.innerHTML = `${item.timeframes.weekly.current}hrs`;
        previous.innerHTML = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        break;
      case "monthly":
        hour.innerHTML = `${item.timeframes.monthly.current}hrs`;
        previous.innerHTML = `Last Month - ${item.timeframes.monthly.previous}hrs`;
        break;
      default:
        console.log(null);
        break;
    }
  }
}
