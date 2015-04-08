var http = require('http');
var request = require('request');
var input = process.argv[2];
var ejs = require('ejs')
var express = require('express');
var app = express();
app.set("view_engine", "ejs")
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))
var counter = 0;

var Search = {
    0: {
        id: 0,
        name: "cat"
    }
}
var counter = 1;

app.get("/results", function (req, res) {
    res.render("results.ejs", {
        results: results
    })
})
app.get("/", function (req, res) {
        res.redirect("/Search/new")
    })
    //Page for new search
app.get("/Search/new", function (req, res) {
        res.render("new.ejs")
    })
    //add search
app.post("/Search", function (req, res) {
    console.log(req.body)
    var newSearch = {
        id: counter,
        name: req.body.name
    }
    
    Search[counter] = newSearch;
    counter++

    res.redirect("/results")
});

app.listen(3000, function () {
    console.log("listening on port 3000")
})

//request("http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=dc6zaTOxFJmzC ", function (err, response, body) {
//        var results = JSON.parse(body);
//        for (var i = 0; i < results.data.length; i++) {
//            console.log(results.data[i].bitly_gif_url);
//}
//});