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
app.get("public/", (request, response) => { //getting the index file
    response.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("public/about.html", (request, response) => { //getting the index file
    response.sendFile(path.join(__dirname, "static", "about.html"));
});

app.get("public/projects.html", (request, response) => { //getting the project file
    response.sendFile(path.join(__dirname, "static", "projects.html"));
});

app.get("public/contacts.html", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static", "contacts.html"));
});

/* CSS */
app.get("public/css/style.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "style.css")); //when index is looking for this css, this line looks on static/css/style.css
});

app.get("public/css/all.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "all.css")); //when index is looking for this css, this line looks on static/css/all.css
});

app.get("public/css/utilities.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "utilities.css")); //when index is looking for this css, this line looks on static/css/style.css
});

app.get("public/css/text.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "text.css")); //when index is looking for this css, this line looks on static/css/text.css
});

app.get("public/css/particles.css", (request, response) => {
    response.sendFile(path.join(__dirname, "static/css/", "particles.css")); //when index is looking for this css, this line looks on static/css/particles.css
});

/* Font Awesome, webfonts folder: for fonts and icons */
app.get("public/webfonts", (request, response) => {
    response.sendFile(path.join(__dirname, "static/webfonts/")); //when index is looking for this css, this line looks on webfonts folder
});


/* JavaScript */
app.get("public/js/client.js", (request, response) => {
    response.sendFile(path.join(__dirname, "static/js/", "client.js")); //on the browser the site tree will look like "localhost:8000/js/client.js"
});

app.get("public/js/particles.js", (request, response) => {
    response.sendFile(path.join(__dirname, "static/js/", "particles.js")); //on the browser the site tree will look like "localhost:8000/js/particles.js"
});

app.get("public/js/text.js", (request, response) => {
    response.sendFile(path.join(__dirname, "static/js/", "text.js")); //on the browser the site tree will look like "localhost:8000/js/text.js"
});


/* Images */
app.get("public/img/HEAD.jpg", (request, response) => {
    response.sendFile(path.join(__dirname, "static/img/", "HEAD.jpg")); //Headshot picture
});

app.get("public/img/player.png", (request, response) => {
    response.sendFile(path.join(__dirname, "static/img/", "player.png")); //Platform Game Picture
});

app.get("public/img/s2.png", (request, response) => {
    response.sendFile(path.join(__dirname, "static/img/", "s2.png")); //Pixel Art Editor Picture
});

app.get("public/img/calc.png", (request, response) => {
    response.sendFile(path.join(__dirname, "static/img/", "calc.png")); //calculator image
});

/***********************************************************************************/


/*The Game Project */
app.get("public/game/game.html", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/", "game.html"));
});

app.get("public/game/game.js", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/", "game.js"));
});

app.get("public/game/levels.js", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/", "levels.js"));
});

app.get("public/game/style.css", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/", "style.css"));
});

app.get("public/game/img/player.png", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/img/", "player.png"));
});

app.get("public/game/img/sprites.png", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/game/img/", "sprites.png"));
});



/* The 3D card project */
app.get("public/3Dcard/3d.html", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/3Dcard/", "3d.html"));
});

app.get("public/3Dcard/adidas.png", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/3Dcard/", "adidas.png"));
});

app.get("public/3Dcard/card.js", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/3Dcard/", "card.js"));
});

app.get("public/3Dcard/style.css", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/3Dcard/", "style.css"));
});

/*Pixel Art Editor*/
app.get("public/PixelEditor/pixelDrawer.html", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/PixelEditor/", "pixelDrawer.html"));
});

app.get("public/PixelEditor/pixelEditor.js", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/PixelEditor/", "pixelEditor.js"));
});

app.get("public/PixelEditor/style.css", (request, response) => { //getting the contacts file
    response.sendFile(path.join(__dirname, "static/PixelEditor/", "style.css"));
});

app.listen(8000);