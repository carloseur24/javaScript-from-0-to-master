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
const par = (list) => {
    return (list.length % 2 === 0);
};

const mean = (list) => {
    const n = arrayNum(list)
    const sumList = n.reduce((init, next) => {
        return init + next;
    })
    const average = sumList / list.length
    return average
}
const median = (list) => {
    const listN = arrayNum(list)
    const middleList = parseInt(listN.length / 2);
    let median;
    if (par(listN)) {
        const e1 = listN[middleList - 1]
        const e2 = listN[middleList]
        const average = mean([
            e1,
            e2
        ])
        median = average;
        return `Your Median is ${median.toPrecision(10)}`
    } else {
        median = listN[middleList]
        return `Your Median is ${median.toPrecision(10)}`
    };
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