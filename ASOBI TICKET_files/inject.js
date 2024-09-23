// ユーティリティ関数: パディング処理
const pad = (num) => String(num).padStart(2, "0");

// 現在時刻を更新する関数
const updateTime = () => {
  const now = new Date();
  const selectors = {
    year: ".year",
    month: ".month",
    day: ".day",
    hour: ".hour.time-item",
    minute: ".minute.time-item",
    second: ".second.time-item",
  };

  Object.entries(selectors).forEach(([key, selector]) => {
    const element = document.querySelector(selector);
    if (element) {
      let value;
      switch (key) {
        case "year":
          value = now.getFullYear();
          break;
        case "month":
          value = pad(now.getMonth() + 1);
          break;
        case "day":
          value = pad(now.getDate());
          break;
        case "hour":
          value = pad(now.getHours());
          break;
        case "minute":
          value = pad(now.getMinutes());
          break;
        case "second":
          value = pad(now.getSeconds());
          break;
        default:
          value = "";
      }
      element.textContent = value;
    }
  });
};

// 日付フォーマット関数
const formatDate = (dateString) => {
  if (!dateString) return "日付が無効です";
  const [year, month, day] = dateString.split("-").map((part) => part.replace(/^0+/, ""));
  return `${year}年${month}月${day}日`;
};

// localStorageからデータを取得し、ページに表示する関数
const populateTicketData = () => {
  const keys = ["openingtime", "showtime", "lastname", "firstname", "birthdate", "managerNumber", "qrCode"];
  const data = keys.reduce((acc, key) => {
    acc[key] = localStorage.getItem(key);
    return acc;
  }, {});

  const { openingtime, showtime, lastname, firstname, birthdate, managerNumber, qrCode } = data;

  // 要素が存在する場合のみ設定
  const elements = {
    openingtime: `OPEN ${openingtime}`,
    showtime: `START ${showtime}`,
    fullName: `${lastname} ${firstname}`,
    birthDate: formatDate(birthdate),
    managerNumber,
    qrCode,
  };

  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === "qrCode") {
        element.src = value;
      } else {
        element.textContent = value;
      }
    }
  });

  const ticketElement = document.getElementById("ticket");
  if (ticketElement) {
    ticketElement.style.display = "block";
  }
};

// ページロード時の初期化処理
window.addEventListener("load", () => {
  updateTime();
  setInterval(updateTime, 1000);
  populateTicketData();
});
