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
const list2 = [1, 2, 3, 4, 5, 100, 500, 600, 800, 5098]
const list1 = [
    100,
    200,
    300,
    400,
    500
]
let listD = [];
const sort = listD.sort((a,b) => a-b);
const generator = () => {
    let i = 0;
    let e = 0;
    const inputValue = prompt('Enter how many values do you want to use: ')
    do{
        const inputValues = prompt('Input 5 values to calculate aricmetic average: ')
        listD.push(parseInt(inputValues))
        e++
    } while(e<inputValue)
    console.log (listD)
    function calculateAricmeticAverage(list) {
        const sumList = list.reduce(
            function (value = 0, newElement) {
                return value + newElement;
            }
        )
        const average = sumList / list.length
        console.log (average)
        return average
    }
    calculateAricmeticAverage(listD)
    window.location.reload()
}

function average2(list) {
    
    const sumList = list.reduce(
        function (value = 0, newElement) {
            return value + newElement;
        }
    )

    const average = sumList / list.length
    return average
}