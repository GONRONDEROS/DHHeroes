const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.listen(3030, () => {
    console.log("El servidor funciona bien en 3030")
});

app.get('/home', (req, res) => {
    //res.sendFile("C:/Users/gonza/OneDrive/Escritorio/AhoraSi/DHHeroes/views/index.html"); // este es con ruta completa
    res.sendFile(path.join(__dirname, "./views/index.html")); //esta es con ruta relativa
});

/*let htmlPath = path.resolve(__dirname, './views/index.html');
console.log(htmlPath)*/




