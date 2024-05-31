function updateTime() {
  const now = new Date();
  const pad = (num) => ("0" + num).slice(-2);
  document.querySelector(".year").textContent = now.getFullYear();
  document.querySelector(".month").textContent = pad(now.getMonth() + 1);
  document.querySelector(".day").textContent = pad(now.getDate());
  document.querySelector(".hour.time-item").textContent = pad(now.getHours());
  document.querySelector(".minute.time-item").textContent = pad(now.getMinutes());
  document.querySelector(".second.time-item").textContent = pad(now.getSeconds());
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  const formattedMonth = month.replace(/^0+/, "");
  const formattedDay = day.replace(/^0+/, "");
  return `${year}年${formattedMonth}月${formattedDay}日`;
}

window.addEventListener("load", () => {
  updateTime();
  setInterval(updateTime, 1000);
});

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const openingtime = urlParams.get("openingtime");
  const showtime = urlParams.get("showtime");
  const lastname = urlParams.get("lastname");
  const firstname = urlParams.get("firstname");
  const birthdate = urlParams.get("birthdate");
  const managerNumber = urlParams.get("managerNumber");
  const qrCode = localStorage.getItem("qrCode");

  document.getElementById("openingtime").textContent = `OPEN ${openingtime}`;
  document.getElementById("showtime").textContent = `START ${showtime}`;
  document.getElementById("fullName").textContent = `${lastname} ${firstname}`;
  document.getElementById("birthDate").textContent = formatDate(birthdate);
  document.getElementById("managerNumber").textContent = managerNumber;
  if (qrCode) {
    document.getElementById("qrCode").src = qrCode;
  }

  document.getElementById("ticket").style.display = "block";
};
