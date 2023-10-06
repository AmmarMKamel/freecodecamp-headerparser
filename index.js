// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
	res.json({ greeting: "hello API" });
});

/**
 * Responds to requests sent to "/api/whoami" with a JSON object containing the client's IP address,
 * preferred language and user agent (software info).
 *
 * Sets the response status to 200.
 *
 * @param {object} req - The request object, containing the client's details.
 * @param {object} res - The response object, used to end the request.
 */
app.get("/api/whoami", (req, res) => {
	// Set the response status to 200
	res.status(200).json({
		// Get the IP address from the request
		ipaddress: req.socket.remoteAddress,
		// Get the language from the request header
		language: req.headers["accept-language"],
		// Get the software (user agent) from the request header
		software: req.headers["user-agent"],
	});
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
