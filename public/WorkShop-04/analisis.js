const salariesVen = venezuela.map((i) => {
    return i.salary*4.5
})
const salariesSort = (list) => list.sort((a, b) => a - b);
const salariesVenSort = salariesSort(salariesVen)


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

const showMedian = document.querySelector('.results2')
const showmedian = document.createElement('p')
const Median = document.createTextNode('$'+GeneralMedianVen)

showMedian.appendChild(showmedian)
showmedian.appendChild(Median)

const showTop = document.querySelector('.results3')
const showtop = document.createElement('p')
const top10 = document.createTextNode('$'+MedianTop10)

showTop.appendChild(showtop)
showtop.appendChild(top10)

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }
})