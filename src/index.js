const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("listening in PORT", PORT);
});
