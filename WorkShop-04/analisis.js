const salariesVen = venezuela.map((i) => {
    return i.salary
})
const salariesSort = (list) => list.sort((a, b) => a - b);
const salariesVenSort = salariesSort(salariesVen)
console.log(salariesVenSort)
console.log(salariesVenSort.length)

const par = (list) => {
    return (list.length % 2 === 0);
}

const mean = (list) => {
    const sumList = list.reduce((total, amount) => {
        return total + amount;
    })
    const mean = sumList / list.length
    return mean
}

const median = (list) => {
    const middleList = parseInt(list.length / 2);
    let median;
    if (par(list)) {
        const e1 = list[middleList - 1];
        const e2 = list[middleList];
        const Aritmeticmean = mean([
            e1,
            e2
        ]);
        median = Aritmeticmean;
        return median
    } else {
        median = list[middleList];
        return median
    };
};

const spliceStart = (salariesVenSort.length * (100 - 10)) / 100;
const spliceCount = salariesVenSort.length - spliceStart;
const salariosTop10 = salariesVenSort.splice(spliceStart, spliceCount )
const GeneralMedianVen = median(salariesVenSort)
const MedianTop10 = median(salariosTop10)


console.log({
    GeneralMedianVen,
    MedianTop10,
})