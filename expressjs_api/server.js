require("dotenv").config();
const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const cors = require("cors");

// server
const app = express();

// cors
app.options("*", cors());
app.use(cors());

// importing routes
const apiv1Routes = require("./src/api/routes/apiv1.routes.js");
const apiv2Routes = require("./src/api/routes/apiv2.routes.js");
const frontRoutes = require("./src/front/routes/front.routes.js");

// handlebars

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/front/views");

// static assets
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist"))
);
app.use(
  "/hbs",
  express.static(path.join(__dirname, "/node_modules/handlebars/dist"))
);

// loading app routes
app.use("/api/v1", apiv1Routes);
app.use("/api/v2", apiv2Routes);
app.use("/", frontRoutes);

// port listening configuration
process.env.NODE_ENV === "production"
  ? (process.env.PORT = process.env.PROD_PORT)
  : (process.env.PORT = process.env.DEV_PORT);

// app init message
const MSG = `-> Server Up and running! \n ${"-".repeat(
  50
)} \n Word Count APP by Sebastián Kravetz \n based on word-counter-challenge by @bi-lriveros \n ${"-".repeat(
  50
)} \n MODE: ${process.env.NODE_ENV} | PORT: ${process.env.PORT} | PID: ${
  process.pid
}`;
// app listening
app.listen(process.env.PORT, () => {
  console.log(MSG);
});
