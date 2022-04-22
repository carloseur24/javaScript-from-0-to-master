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

// const userCoupon = cuponsObj.find();
let couponNumb = [];
const value = () => {
    for (let i = 0; i < cuponsObj.length; i++) {
        array = cuponsObj[i].num;
        couponNumb.push(array)
    }
}
value()

let inputC;

function onbuttonresult() {
    const inputP = document.getElementById('inputprice').value;
    const inputD = document.getElementById('inputdiscount').value;
    if (inputP == false || inputD == false) {
        alert('Fill in all the fields')
    } else {
        inputC = document.getElementById('inputcupon').value;
        console.log(inputC)
        switch (inputC) {
            case 'Select an option':
                console.log('1')
                priceF(inputP, inputD, couponNumb[0])
                break;
            case 'Liberty':
                priceF(inputP, inputD, couponNumb[1])
                break;
            case 'Express':
                priceF(inputP, inputD, couponNumb[2])
                break;
            case 'Freedom':
                priceF(inputP, inputD, couponNumb[3])
                break;
            case 'Maximus':
                priceF(inputP, inputD, couponNumb[4])
                break;
            default:
                console.log('yeah')
                break;
        }
    }
}
const priceF = (price, discount, Cupon) => {
    const resultT = document.getElementById('resultT');
    const result = document.getElementById('result');
    const resultC = document.getElementById('resultC');
    const discounting = discount / 100;
    const couponvalue = Cupon;
    const coupon = Cupon / 100;
    const priceF = (price - (price * (discounting + coupon)));

    if (inputC != 'Select an option') {
        let rmcolorf = document.getElementById('resultf');
        rmcolorf.removeAttribute('style');
        const hidden0 = document.getElementById('resultf').style = "background-color: #ffffffd1";
        const hidden = document.getElementById('resultf2').style = "background-color: #ffffffd1";
        const hidden2 = document.getElementById('resultC').hidden = false;
        const hidden3 = document.getElementById('resultT').hidden = false;
        const hidden4 = document.getElementById('result').hidden = false;
        resultC.innerHTML = 'This coupon add a %' + couponvalue + ' of extra discount in your price';
        setTimeout(() => {
            const hidden2 = document.getElementById('resultC').hidden = true;
            const hidden0 = document.getElementById('resultf').style = "background-color: #22b1aa00";
        }, 5000);
        resultT.innerHTML = 'The final price of your product is ';
        result.innerHTML = '$' + priceF;
    } else {
        let rmcolor2 = document.getElementById('resultf2');
        rmcolor2.removeAttribute('style');
        const hidden = document.getElementById('resultf2').style = "background-color: ##ffffffd1";
        const hidden3 = document.getElementById('resultT').hidden = false;
        const hidden4 = document.getElementById('result').hidden = false;
        resultT.innerHTML = 'The final price of your product is '
        result.innerHTML = '$' + priceF;
    }
}
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