let list1 = [];
let list = [];

const sort = (array) => {
    return array.sort((a, b) => a - b);
}
const listing = (listt) => {
    for (let i = 0; i < listt.length; i++) {
        const result = 1 / listt[i];
        list.push(result)
        console.log(result + 'index #' + i)
    }
}
const armonicMean = (listt = []) => {
    listing(list1)
    const sumresults = list.reduce((total, amount) => total + amount)
    const armonicMean = list.length / sumresults;
    const round = Math.round(armonicMean * 100) / 100;
    console.log(sumresults)
    console.log(armonicMean)
    console.log(list1)
    console.log(list)
    alert(`Your list is ${sort(listt)}\nYour Armonic mean is ${round}`)
}
const generator = (list = list1) => {
    let i = 0;
    let inputValues;
    let inputValue = prompt('Enter how many values do you want to use (I recomend at least enter 5 numbers): ')
    if (parseInt(inputValue) >= 5) {
        do {
            inputValues = prompt('Input ' + inputValue + ' values to calculate it: ')
            list.push(parseInt(inputValues))
            i++;
        } while (i < inputValue)
        armonicMean(list1)
        window.location.reload()
    } else {
        alert('Please enter more than 5 numbers')
        alert('try again')
    }
}
