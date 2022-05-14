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

let list1 = [];
const sort = (array) => {
    return array.sort((a, b) => a - b);
}
const par = (list) => {
    return (list.length % 2 === 0);
};

function mean(list) {
    const sumList = list.reduce((value = 0, newElement) => {
            return value + newElement;
        }
    )
    const average = sumList / list.length
    return average
}
const median = (list) => {
    const middleList = parseInt(list.length / 2);
    let median;
    if (par(list)) {
        const e1 = list[middleList - 1]
        const e2 = list[middleList]
        const average = mean([
            e1,
            e2
        ])
        median = average;
        alert('Your Median is: ' + median)
        alert(sort(list))
    } else {
        median = list[middleList]
        alert('Your Median is: ' + median)
        alert(sort(list))
    };
}
const generator = (list = list1) => {
    let i = 0;
    let inputValues;
    let inputValue = prompt('Enter how many values do you want to use for this case. \n(I recomend enter a same number many times to view a real mode): ')
    if (parseInt(inputValue) >= 3) {
            do {
                inputValues = prompt('Input ' + inputValue + ' values to calculate it: ')
                list.push(parseInt(inputValues))
                i++;
            } while (i < inputValue)
            median(list1)
            window.location.reload()
    } else {
        alert('Please enter more than 3 numbers')
        alert('try again')
    }
}

