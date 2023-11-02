require("dotenv").config();
const express = require("express");
const methodOverride = require('method-override')
const app = express();


// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

//testing port
const PORT = process.env.PORT


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



app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
