let express = require("express");
let bodyparser = require("body-parser");
let path = require("path");
let app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("bill", {no1:undefined, no2:undefined});
});

app.post("/calbill", (req, res) => {
    let qty = parseFloat(req.body.qty);
    let rate = parseFloat(req.body.rate);
    res.render("bill", {no1:qty, no2:rate});

});

app.listen(8080, () => {
    console.log("Server Start.........");
});
