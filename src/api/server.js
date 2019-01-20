const express = require("express");
let app = express();
let routes = require("./routes");

/**
 * Get enviroment
 */
let env = process.env.NODE_ENV;

if (!env) {
	env = "development";
}

/**
 * Default por config
 */
const port = process.env.port || 3000;

/**
 * Set routes
 */
app.use(routes);

/**
 * Start server
 */
app.listen(port, () => {
	console.log("Server initialiazed on port " + port);
});
