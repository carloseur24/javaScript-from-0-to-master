const option = document.querySelector('#select')
const amount = () => {
    let c = 6
    do {
        const options = document.createElement('option')
        const text = document.createTextNode(`${c}`)
        options.appendChild(text);
        option.appendChild(options);
        c++
    } while (c <= 50)
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