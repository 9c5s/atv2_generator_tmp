/**
 * パスワードをArgon2でハッシュ化してエンコード済み文字列を返す
 * @async
 * @function getHash
 * @param {string} password - ハッシュ化するパスワード
 * @returns {Promise<string>} ハッシュ化されたパスワードのエンコード済み文字列
 */
const getHash = async (password) => {
  try {
    const salt = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

    const hash = await argon2.hash({
      pass: password,
      salt: salt,
      type: argon2.ArgonType.Argon2id,
      hashLen: 32,
      time: 2,
      mem: 1024,
      parallelism: 1,
    });

    return hash.encoded;
  } catch (error) {
    console.error("Hashing error:", error);
    throw error;
  }
};

/**
 * ユーザーのパスワードを認証する
 * @async
 * @function authenticate
 * @returns {Promise<void>}
 */
const authenticate = async () => {
  try {
    const passwordInput = document.getElementById("password");
    const password = passwordInput?.value.trim();

    if (!password) {
      alert("パスワードを入力してください。");
      passwordInput.focus();
      return;
    }

    const hashEncoded = await getHash(password);
    const storedHash =
      "$argon2id$v=19$m=1024,t=2,p=1$AAECAwQFBgcICQoLDA0ODw$/eeG4AbnCXQSx6Vva6y8swloGaxcOHnp5t6Y38EGSwI";

    if (hashEncoded === storedHash) {
      sessionStorage.setItem("authenticated", "true");
      window.location.href = "form.html";
    } else {
      alert("パスワードが間違っています");
      passwordInput.value = "";
      passwordInput.focus();
    }
  } catch (error) {
    console.error("Authentication error:", error);
    alert("認証中にエラーが発生しました。");
  }
};

// イベントハンドラ登録
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // フォームのデフォルト送信を防ぐ
      await authenticate();
    });
  }
});
