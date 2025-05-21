document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Contoh hardcoded credential
  const validUsername = "admin";
  const validPassword = "kopirasa";

  if (username === validUsername && password === validPassword) {
  alert("Login berhasil! Selamat datang di Kedai Kopi Hanaya.");
  // Simpan status login
  localStorage.setItem("isLoggedIn", "true");
  // Arahkan ke halaman dashboard
  window.location.href = "../index.html";
}

});
