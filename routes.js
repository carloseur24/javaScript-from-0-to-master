const { response } = require("express")
const {
    Router
} = require("express")
var path = require('path')
const router = Router()
const express = require("express")
const app = express()

const index = (req, res) => {
    res.sendFile(__dirname +'/index.html')
}
const geometrical = (req, res=response) => {
    res.sendFile(__dirname+'/public/WorkShop-01/geometrical-figures.html')
}
const price = (req, res=response) => {
    res.sendFile(__dirname+'/public/WorkShop-02/price-discounts.html')
}
const mean = (req, res=response) => {
    res.sendFile(__dirname+'/public/WorkShop-03/mean/mean.html')
}
const armonicmean = (req, res=response) => {
    res.sendFile(__dirname+'/public/WorkShop-03/Armonic-mean/armonicMean.html')
}
const median = (req, res=response) => {
    res.sendFile(__dirname+'/public/WorkShop-03/median/median.html')
}
const mode = (req, res=response) => {
    res.sendFile(__dirname+'/public/WorkShop-03/mode/mode.html')
}
const salaries = (req, res=response) => {
    res.sendFile(__dirname+'/public/WorkShop-04/salaries.html')
}
const savings = (req, res=response) => {
    res.sendFile(__dirname+'/public/WorkShop-05-Save-Capacity/savings.html')
}

app.use('/public',express.static(path.join(__dirname,'/public')));

app.get('/index', index)
app.get('/Geometrical-figures', geometrical)
app.get('/Discount-price', price)
app.get('/Aritmetic-Mean', mean)
app.get('/Armonic-mean', armonicmean)
app.get('/Median', median)
app.get('/Mode', mode)
app.get('/Salaries', salaries)
app.get('/Savings', savings)
// app.use(express.static())geo
// app.use(express.static())
// app.use(express.static())
// app.use(express.static())
// app.use(express.static("/Geometrical-figures"))


module.exports = app, router, index;