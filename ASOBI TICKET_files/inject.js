/**
 * パディング処理を行う関数
 * @param {string | number} num - パディングする数値
 * @param {number} [length=2] - パディング後の文字列の長さ
 * @returns {string} パディングされた文字列
 */
const pad = (num, length = 2) => `${num}`.padStart(length, "0");

/**
 * 現在時刻を更新する関数
 */
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

  const timeValues = {
    year: `${now.getFullYear()}`,
    month: pad(now.getMonth() + 1),
    day: pad(now.getDate()),
    hour: pad(now.getHours()),
    minute: pad(now.getMinutes()),
    second: pad(now.getSeconds()),
  };

  for (const [key, selector] of Object.entries(selectors)) {
    document.querySelector(selector)?.replaceChildren(timeValues[key] ?? "");
  }
};

/**
 * 金額を半角¥記号とカンマ区切りでフォーマットする関数
 * @param {string | number} amount - フォーマットする金額
 * @returns {string} フォーマットされた金額文字列
 */
const formatCurrency = (amount) => `¥${new Intl.NumberFormat("ja-JP").format(Number(amount))}`;

/**
 * 日付文字列をフォーマットする関数
 * @param {string} dateString - フォーマットする日付文字列
 * @returns {{
 *   year: number,
 *   month: number,
 *   day: number,
 *   weekday: string
 * }} フォーマットされた日付情報を含むオブジェクト
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: date.toLocaleDateString("ja-JP", { weekday: "short" }),
  };
};

/**
 * 生年月日をフォーマットする関数 ex. 2000年1月1日
 * @param {string} date - フォーマットする生年月日文字列
 * @returns {string} フォーマットされた生年月日文字列
 */
const formatBirthdate = (date) => {
  const { year, month, day } = formatDate(date);
  return `${year}年${month}月${day}日`;
};

/**
 * localStorageからデータを取得しページに表示する関数
 */
const populateTicketData = () => {
  const {
    performanceDate,
    performanceName,
    venueAndType,
    openingtime,
    showtime,
    seatType,
    ticketPrice,
    lastname,
    firstname,
    birthdate,
    managerNumber,
    qrCode,
  } = localStorage;

  const performanceDateObj = formatDate(performanceDate);

  const elements = {
    performanceDateYear: performanceDateObj.year,
    performanceDateMonth: performanceDateObj.month,
    performanceDateDay: performanceDateObj.day,
    performanceDateWeekday: `(${performanceDateObj.weekday})`,
    performanceName,
    venueAndType,
    openingtime: `OPEN ${openingtime}`,
    showtime: `START ${showtime}`,
    seatType,
    ticketPrice: formatCurrency(ticketPrice),
    fullName: `${lastname} ${firstname}`,
    birthDate: formatBirthdate(birthdate),
    managerNumber,
    qrCode,
  };

  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      id === "qrCode" ? (element.src = value) : (element.textContent = value);
    }
  });

  document.getElementById("ticket").style.display = "block";
};

/**
 * ページロード時の初期化処理
 */
window.addEventListener("load", () => {
  updateTime();
  setInterval(updateTime, 1000);
  populateTicketData();
});
