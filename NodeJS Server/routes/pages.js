const express = require("express"),
  router = express.Router(),
  questions_list = require("../mock/questions_list");

router.get("/", (req, res) => {
  res.status(200).json(questions_list);
});

module.exports = router;
