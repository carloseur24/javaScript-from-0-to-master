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
    const n=arrayNum(list)
    const sumList = n.reduce((init, next) => {
        return init + next;
    })
    const average = sumList / list.length
    return average
}
const median = (list) => {
    const listN= arrayNum(list)
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