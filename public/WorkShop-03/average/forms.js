/**
how to work every method to iterations 

[■,■,■,■].map(■→●) ⇒ [●,●,●,●]
[■,●,■,▲].filter(■→true) ⇒ [■,■]
[■,●,■,▲].find(●→true) ⇒ ●
[■,●,■,▲].findIndex(●→true) ⇒ 1
[■,●,■,▲].fill(●) ⇒ [●,●,●,●]
[■,●,■,▲].some(●→true) ⇒ true
[■,●,■,▲].every(●→true) ⇒ false

**/
const option = document.querySelector('#select')
const amount = () => {
    let c = 3
    do {
        const options = document.createElement('option')
        const text = document.createTextNode(`${c}`)
        options.appendChild(text);
        option.appendChild(options);
        c++
    } while (c <= 30)
}
amount()

const sort = (array) => {
    const result = array.sort((a, b) => a - b);
    return result
}
const arrayNum = (arrOfStr) => {
    const numb = arrOfStr.map(str => {
        return Number(str);
    });
    return numb;
}
const aritmeticMean = (list) => {
    const n=arrayNum(list)
    const sumList = n.reduce((init, next) => {
        return init + next;
    })
    const average = sumList / list.length
    return `Your Aritmetic mean is ${average.toPrecision(10)}`
    
}