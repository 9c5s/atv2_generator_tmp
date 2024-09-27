// ユーティリティ関数: ファイルをData URLとして読み込む
const readFileAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
};

// フォームの送信イベントリスナー
document.getElementById("userForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // デフォルトのフォーム送信を防止

  try {
    // フォーム要素の取得
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
    } = event.target.elements;

    // QRコード画像をData URLとして読み込む
    const qrCodeDataURL = await readFileAsDataURL(qrCode.files[0]);

    // 必要なすべてのフォームデータを取得
    const formData = {
      performanceDate: performanceDate.value,
      performanceName: performanceName.value,
      venueAndType: venueAndType.value,
      openingtime: openingtime.value,
      showtime: showtime.value,
      seatType: seatType.value,
      ticketPrice: ticketPrice.value,
      lastname: lastname.value,
      firstname: firstname.value,
      birthdate: birthdate.value,
      managerNumber: managerNumber.value,
      qrCode: qrCodeDataURL,
    };

    // データをlocalStorageに保存
    Object.entries(formData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    // 受信側ページに遷移
    window.location.href = "ASOBI TICKET.html";
  } catch (error) {
    console.error("エラーが発生しました:", error);
    alert("フォームの送信中にエラーが発生しました。再度お試しください。");
  }
});
