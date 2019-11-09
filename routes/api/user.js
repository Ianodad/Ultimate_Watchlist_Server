const express = require("express");
// assign express route to router
const router = express.Router();


router.get("/", (req, res) => {
	res.send("User working");
});

module.exports = router;
