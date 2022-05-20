require('dotenv').config();
const express = require('express');
const { handle } = require('../hbs');
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.app.set('view engine', 'hbs');
        this.port = process.env.PORT;
        this.middlewares()
        this.hbs()
        this.render()
        this.routes()
    }
    async hbs(){
        await handle()
    }
    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }
    render() {
        this.app.get('/', (req, res) => {
            res.render('index');
        })
        this.app.get('/views/index.hbs', (req, res) => {
            res.render('index');
        })
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`app listening on port  ${this.port}`);
        })
    }
    routes(){
        this.app.use(require('../routes'))
    }
}

module.exports = Server;