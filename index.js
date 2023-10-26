require("dotenv").config();
const express = require("express");
const app = express();

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

//listening
app.listen(process.env.PORT);

//testing port
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
