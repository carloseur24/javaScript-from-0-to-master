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
const mode = (list = []) => {
    let mode = arrayNum(list)
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
        mode = 'Your Mode is ' + moda1 + ' and ' + moda2: mode = 'in this case your Mode is ' + moda1;
    })
    return `Your list is: ` + sort(list) + ` and ${mode}`;
}