document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[username] && users[username] === password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedUser", username);

    Swal.fire({
      icon: "success",
      title: "Login Berhasil!",
      text: `Selamat datang, ${username}`,
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      window.location.href = "../index.html";
    });

  } else {
    Swal.fire({
      icon: "error",
      title: "Login Gagal!",
      text: "Username atau password salah!",
    });
  }
});
