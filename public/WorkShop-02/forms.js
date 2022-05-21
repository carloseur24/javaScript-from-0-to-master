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
        const hidden0 = document.getElementById('resultf').style = "background-color: #ffff";
        const hidden = document.getElementById('resultf2').style = "background-color: #fff";
        const hidden2 = document.getElementById('resultC').hidden = false;
        const hidden3 = document.getElementById('resultT').hidden = false;
        const hidden4 = document.getElementById('result').hidden = false;
        resultC.innerHTML = 'This coupon add a %' + couponvalue + ' of extra discount in your price';
        // setTimeout(() => {
        //     const hidden2 = document.getElementById('resultC').hidden = true;
        //     const hidden0 = document.getElementById('resultf').style = "background-color: #22b1aa00";
        // }, 10000);
        resultT.innerHTML = 'The final price of your product is ';
        result.innerHTML = '$' + priceF;
    } else {
        let rmcolor2 = document.getElementById('resultf2');
        rmcolor2.removeAttribute('style');
        const hidden = document.getElementById('resultf2').style = "background-color: #fff";
        const hidden3 = document.getElementById('resultT').hidden = false;
        const hidden4 = document.getElementById('result').hidden = false;
        resultT.innerHTML = 'The final price of your product is '
        result.innerHTML = '$' + priceF;
    }
}
