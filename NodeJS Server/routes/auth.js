const express = require("express"),
  router = express.Router(),
  auth_data = require("../mock/auth_data");

router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username !== auth_data.username)
    res.status(401).json({ message: "Invalid Username" });
  else if (password !== auth_data.password)
    res.status(401).json({ message: "Invalid Password" });
  else res.status(200).json({ message: "Successfully LoggedIn" });
});

module.exports = router;
