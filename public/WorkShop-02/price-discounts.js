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
