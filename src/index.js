require("express-async-errors");
const express = require("express");
var cors = require('cors')
const { errorHandling } = require("./errorHandling.js");
require("dotenv").config();

const app = express();
app.use(cors())
app.use(express.json());

require("./routes")(app);


app.use(errorHandling);

app.listen(process.env.PORT || 4000, () => console.log("Running on port 4k"));
