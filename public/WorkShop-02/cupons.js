const cupon = document.getElementById('inputcupon')
const hidden0 = document.getElementById('resultf').style = "background-color: #22b1aa00";
const hidden = document.getElementById('resultf2').style = "background-color: #22b1aa00";
const hidden2 = document.getElementById('resultC').hidden = true;
const hidden3 = document.getElementById('resultT').hidden = true;
const hidden4 = document.getElementById('result').hidden = true;

const cuponsObj = [{
    name: 'Select an option',
    num: 0
}, {
    name: 'Liberty',
    num: 15
}, {
    name: 'Express',
    num: 50
}, {
    name: 'Freedom',
    num: 5
}, {
    name: 'Maximus',
    num: 33.9
}]

let couponNumb = [];
const value = () => {
    for (let i = 0; i < cuponsObj.length; i++) {
        array = cuponsObj[i].num;
        couponNumb.push(array)
    }
}
value()

let inputC;
const creating_cupons = () => {
    const options = cuponsObj.forEach(e => {
        const obj = e.name
        const opt = document.createElement('option')
        cupon.appendChild(opt);
        opt.setAttribute('id', 'color')
        // const data = document.createTextNode(obj + ' | ' + '%' + obj2)
        const data = document.createTextNode(obj)
        opt.appendChild(data);
    })
    const alert = document.getElementById('labelcupon')
    alert.innerHTML = '*You have a diponible coupon to select*';
}
creating_cupons()