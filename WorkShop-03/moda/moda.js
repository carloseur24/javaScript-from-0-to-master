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
let list2 = [1,2,2,651,631,3,1,6,6,0];

const sort = (array) => {
    return array.sort((a, b) => a - b);
}
const mode = (list = []) => {
    let moda;
    const listCount = {};
    list.map(e =>
        (listCount[e]) ?
        listCount[e] += 1 : listCount[e] = 1);
    const listArray = Object.entries(listCount).sort((e1, e2) => e1[1] - e2[1]);
    const E1 = listArray[listArray.length - 1][1];
    const E2 = listArray[listArray.length - 2][1];
    const moda1 = listArray[(listArray.length - 1)][0];
    const moda2 = listArray[(listArray.length - 2)][0];
    listArray.map(() => {
        (E1 == E2) ?
        moda = 'in this case your Mode is ' + moda1 + ' and ' + moda2: moda = 'in this case your Mode is ' + moda1;
    })
    alert('Your list is: '+sort(list1)+' and '+moda);
}
const generator = (list = list1) => {
    let i = 0;
    let inputValues;
    let inputValue = prompt('Enter how many values do you want to use for this case. \n(I recomend enter a same number many times to view a real mode): ')
    if (parseInt(inputValue) >= 5) {
            do {
                inputValues = prompt('Input ' + inputValue + ' values to calculate it: ')
                list.push(parseInt(inputValues))
                i++;
            } while (i < inputValue)
            mode(list1)
            window.location.reload()
    } else {
        alert('Please enter more than 5 numbers')
        alert('try again')
    }
}