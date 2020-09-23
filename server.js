//code here
// this app starts a server.
const express = require("express");
// middleware that allows easy log requests, errors and more to the console. 
const logger = require("morgan");
//ODM library modeling environment for data. 
const mongoose = require("mongoose");
// listens on port 3000 for connection. 
const PORT = process.env.PORT || 3000;

const app = express();
// register middleware or chain of middlewares
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.Mongodb_uri || "mongodb://localhost/workout", { useNewURLParser: true });

const db = require("./models");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});


