const router = require("express").Router();

//more code to come!
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/def-thai.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/cat-cafe.jpg",
    },
  ];
 
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("/places");
});

module.exports = router;
