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
  router.get('/new', (req,res) => {
    res.render('places/new')
  })
  res.render("places/index", { places });
});

module.exports = router;
