const option = document.querySelector('#select')

const amount = () => {
    let c = 3
    do {
        const options = document.createElement('option')
        const text = document.createTextNode(`${c}`)
        options.appendChild(text);
        option.appendChild(options);
        c++
    } while (c <= 30)
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
const fracs = (numb) => {
    const listA = []
    for (let i = 0; i < numb.length; i++) {
        listA.push([1, numb[i]])
    }
    const gcd = (a, b) => {
        let num = 2,
            res = 1;
        while (num <= Math.min(a, b)) {
            if (a % num === 0 && b % num === 0) {
                res = num;
            };
            num++;
        };
        return res;
    }
    const sumFrac = (a, b) => {
        const aDenom = a[1],
            aNumer = a[0];
        const bDenom = b[1],
            bNumer = b[0];
        let resDenom = aDenom * bDenom;
        let resNumer = (aDenom * bNumer) + (bDenom * aNumer);
        const greatestDivisor = gcd(resDenom, resNumer);
        return [resNumer / greatestDivisor, resDenom / greatestDivisor];
    };
    const sumArrayOfFractions = arr => {
        return (arr.reduce((acc, val) => sumFrac(acc, val)))
    };
    return sumArrayOfFractions(listA)
}
const fracsum = (numb) => {

    const gcd = (a, b) => {
        let num = 2,
            res = 1;
        while (num <= Math.min(a, b)) {
            if (a % num === 0 && b % num === 0) {
                res = num;
            };
            num++;
        };
        return res;
    }
    const sumFrac = (a, b) => {
        const aDenom = a[1],
            aNumer = a[0];
        const bDenom = b[1],
            bNumer = b[0];
        let resDenom = aDenom * bDenom;
        let resNumer = (aDenom * bNumer) + (bDenom * aNumer);
        const greatestDivisor = gcd(resDenom, resNumer);
        return [resNumer / greatestDivisor, resDenom / greatestDivisor];
    };
    const sumArrayOfFractions = arr => {
        return (arr.reduce((acc, val) => sumFrac(acc, val)))
    };
    return sumArrayOfFractions(numb)
}
const armonicMean = (list1 = []) => {
    const list = [];
    const result = sort(list1)
    const numb = arrayNum(result)
    const sum = fracs(numb)
    list.push([sum[1], sum[0]])
    list.push([numb.length, 1])
    const armonicMean = (list[0][0] * list[1][0]) / (list[0][1] * list[1][1])
    return `Your Armonic mean is ${armonicMean.toPrecision(10)}`
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