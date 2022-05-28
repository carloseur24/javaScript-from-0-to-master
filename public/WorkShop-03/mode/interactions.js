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
const avoid = (field) => {
    const div = document.querySelector('#result')
    if (field !== "") {
        div.parentNode.removeChild(div);
    }
}
const active = (button, input) => {
    const field = input.value.trim();
    let idx = 0;
    button.addEventListener('click', () => {
        if (idx < 1) {
            idx += 1;
            button.disabled = (field !== "")
        }
        setTimeout(() => {
            idx -= 1;
        }, 10);
    })
}
const listeningS = () => {
    const input = document.querySelector("#input");
    const button = document.querySelector("#event");
    const field = input.value.trim();
    button.disabled = (field == "")
    active(button, input);
    avoid(field)
}