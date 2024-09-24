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
    const form = event.target;

    // フォームデータの取得
    const { openingtime, showtime, lastname, firstname, birthdate, managerNumber, qrCode } = form.elements;

    const qrCodeFile = qrCode.files[0];

    if (!qrCodeFile) {
      alert("QRコード画像を選択してください。");
      return;
    }

    // QRコード画像をData URLとして読み込む
    const qrCodeDataURL = await readFileAsDataURL(qrCodeFile);

    // データをlocalStorageに保存
    const formData = {
      openingtime: openingtime.value,
      showtime: showtime.value,
      lastname: lastname.value,
      firstname: firstname.value,
      birthdate: birthdate.value,
      managerNumber: managerNumber.value,
      qrCode: qrCodeDataURL,
    };

    Object.entries(formData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    // 受信側ページに遷移
    window.location.href = "ASOBI TICKET.html";
  } catch (error) {
    console.error("QRコード画像の読み込み中にエラーが発生しました:", error);
    alert("QRコード画像の読み込み中にエラーが発生しました。再度お試しください。");
  }
});
