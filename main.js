/*global __dirname*/

/*Server*/

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use("/public", express.static(path.join(__dirname, "static")));
app.use("/webfonts", express.static("./webfonts")); //looking for icons in the webfont folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* HTML Files */
app.get("/", (request, response) => { //getting the index file
    response.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/about.html", (request, response) => { //getting the index file
    response.sendFile(path.join(__dirname, "static", "about.html"));
});

app.get("/projects.html", (request, response) => { //getting the project file
    response.sendFile(path.join(__dirname, "static", "projects.html"));
});

app.get("/contacts.html", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static", "contacts.html"));
});

/*The Game Project */
app.get("/game/game.html", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/", "game.html"));
});

app.get("/game/game.js", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/", "game.js"));
});

app.get("/game/levels.js", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/", "levels.js"));
});

app.get("/game/style.css", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/", "style.css"));
});

app.get("/game/img/player.png", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/img/", "player.png"));
});

app.get("/game/img/sprites.png", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/img/", "sprites.png"));
});



/* CSS */
app.get("/css/style.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "style.css")); //when index is looking for this css, this line looks on static/css/style.css
});

app.get("/css/all.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "all.css")); //when index is looking for this css, this line looks on static/css/all.css
});

app.get("/css/utilities.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "utilities.css")); //when index is looking for this css, this line looks on static/css/style.css
});

app.get("/css/text.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "text.css")); //when index is looking for this css, this line looks on static/css/text.css
});

app.get("/css/particles.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "particles.css")); //when index is looking for this css, this line looks on static/css/particles.css
});

/* Font Awesome, webfonts folder: for fonts and icons */
app.get("/webfonts", (request, response) => {
    response.sendFile(path.join(__dirname, "static/webfonts/")); //when index is looking for this css, this line looks on webfonts folder
});


/* JavaScript */
app.get("/js/client.js", (request, response) => {
    response.sendFile(path.join(__dirname, "static/js/", "client.js")); //on the browser the site tree will look like "localhost:8000/js/client.js"
});

app.get("/js/particles.js", (request, response) => {
    response.sendFile(path.join(__dirname, "static/js/", "particles.js")); //on the browser the site tree will look like "localhost:8000/js/particles.js"
});

app.get("/js/text.js", (request, response) => {
    response.sendFile(path.join(__dirname, "static/js/", "text.js")); //on the browser the site tree will look like "localhost:8000/js/text.js"
});


/* Images */
app.get("/img/HEAD.jpg", (request, response) => {
    response.sendFile(path.join(__dirname, "static/img/", "HEAD.jpg")); //Headshot picture
});

app.get("/img/player.png", (request, response) => {
    response.sendFile(path.join(__dirname, "static/img/", "player.png")); //Platform Game Picture
});

app.get("/img/s2.png", (request, response) => {
    response.sendFile(path.join(__dirname, "static/img/", "s2.png")); //Pixel Art Editor Picture
});

app.get("/img/calc.png", (request, response) => {
    response.sendFile(path.join(__dirname, "static/img/", "calc.png")); //calculator image
});

app.listen(8000);