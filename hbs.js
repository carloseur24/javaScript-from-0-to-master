const express = require('express');
const app = express();
const hbs = require('hbs')

async function handle() {
    app.set('view engine', 'hbs');
    hbs.registerPartials(__dirname + '/views/partials');
}
module.exports = {
    handle
}