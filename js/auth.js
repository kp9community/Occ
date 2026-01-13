// default admin (สร้างครั้งแรก)
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify({
    admin: { password: "admin123", role: "admin", name: "Administrator" }
  }));
}

function login() {
  const u = username.value;
  const p = password.value;

  const users = JSON.parse(localStorage.getItem("users"));
  if (!users[u] || users[u].password !== p) {
    msg.innerText = "Username or password incorrect";
    return;
  }

  localStorage.setItem("currentUser", u);
  location.href = "dashboard.html";
}

function requireLogin() {
  const u = localStorage.getItem("currentUser");
  if (!u) location.href = "login.html";
  return u;
}

function logout() {
  localStorage.removeItem("currentUser");
  location.href = "login.html";
}
