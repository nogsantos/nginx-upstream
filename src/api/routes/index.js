const express = require("express");
const router = express.Router();
require("marko/node-require").install();
require("marko/express");

var indexTemplate = require("../views/index.marko");

router.get("/", (req, res) => {
	console.log("Status", "Woks on route /");
	res.marko(indexTemplate);
});

router.get("/hello", (req, res) => {
	console.log("Status", "Woks on route /hello");
	res.status(200).send("This was a success? Status code: 200");
});

module.exports = router;
