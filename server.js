const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const mainRoutes = require("./routes/mainRoutes");

app.use([express.json(), cors(), morgan("dev"), express.urlencoded({ extended: true }), express.static("public"), express.static("uploads")]);

app.use("/api", mainRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});