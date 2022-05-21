let i = 0;
const generator = () => {
    const numbers = document.querySelector('#input').value;
    const split = numbers.split(' ')
    i++
    console.log(i)
    if (i==2){
        return window.location.reload()
    }
    if (split.length < 3) {
        swal('Enter your list', {
            buttons: ['']
        })
        return false
    }
    if (split.length > (parseInt(option.value))) {
        swal('The length of your list is different that your selected', {
            buttons: ['']
        })
    } else if (split.length< (parseInt(option.value))) {
        swal('The length of your list is different that your selected', {
            buttons: ['']
        })
    } else {
        const result = aritmeticMean(split)
        const options = document.querySelector('.result')
        const text = document.createTextNode(result)
        options.appendChild(text);
    }
}

// const list2 = [1, 2, 3, 4, 5, 100, 500, 600, 800, 5098]
// const list1 = [
//     100,
//     200,
//     300,
//     400,
//     500
// ]
// let listD = [];
// const sort = listD.sort((a,b) => a-b);
// const generator = () => {
//     let i = 0;
//     let e = 0;
//     const inputValue = prompt('Enter how many values do you want to use: ')
//     do{
//         const inputValues = prompt('Input 5 values to calculate aricmetic average: ')
//         listD.push(parseInt(inputValues))
//         e++
//     } while(e<inputValue)
//     console.log (listD)

//     calculateAricmeticAverage(listD)
//     window.location.reload()
// }
// function average2(list) {

//     const sumList = list.reduce(
//         function (value = 0, newElement) {
//             return value + newElement;
//         }
//     )

//     const average = sumList / list.length
//     return average
// }