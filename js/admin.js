<body onload="initAdmin()">

<h2>Admin Panel</h2>

<input id="username" placeholder="username">
<input id="password" placeholder="password">
<input id="name" placeholder="name">
<select id="role">
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>
<button onclick="saveUser()">Save</button>

<div id="userList"></div>

<script src="js/auth.js"></script>
<script src="js/admin.js"></script>
</body>
