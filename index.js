var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  res.redirect("/about");
})

router.get("/about", function(req, res){
  res.send(JSON.stringify({hello:"wwww"}));
})

var app = express();
app.use("/",router);
app.listen(3000,() => console.log("3000"));
