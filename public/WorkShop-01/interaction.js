const alersweet1 = () => {
    return swal(`Value don't permitted`, {
        button: ["OK"]
    });
}
const alersweet2 = () => {
    return swal(`An Square has all equal sides`, {
        button: ["OK"]
    });
}
const sperimeter = (side) => {
    if (side.length == 1) {
        return parseInt(side[0]) * 4 + ' cm';
    } else if (side.length > 1 && side.length < 4) {
        alersweet1()
    } else if (side[0] !== side[3]) {
        alersweet2()
    } else {
        return (parseInt(side[0]) + parseInt(side[1]) + parseInt(side[2]) + parseInt(side[3])) + ' cm';
    }
}
const areasquare = (side) => {
    if (side.length == 1) {
        return (parseInt(side[0]) * parseInt(side[0])) + ' cm^2';
    } else if (side.length > 1 && side.length < 4) {
        alersweet1()
    } else if (side[0] !== side[3]) {
        alersweet2()
    } else {
        return (parseInt(side[0]) * parseInt(side[0])) + ' cm^2';
    }
}
const tperimeter = (l1triangle, l2triangle, btriangle) => {
    return l1triangle + l2triangle + btriangle + ' cm'
}; //perimeter
const area3 = (a, b, c) => {
    const l1 = (a + b + c);
    const l2 = (-a + b + c);
    const l3 = (a - b + c);
    const l4 = (a + b - c);
    const lr = l1 * l2 * l3 * l4;
    const rlr = Math.sqrt(lr)
    const calc = 0.25 * rlr;
    if (calc < 1) {
        const calcp = calc.toPrecision(2);
        return calcp + ""
    } else if (calc <= 9) {
        const calcp = calc.toPrecision(3);
        return calcp + ""
    } else if (calc <= 99) {
        const calcp = calc.toPrecision(4);
        return calcp + ""
    } else {
        const calcp = calc.toPrecision(6);
        return calcp + ""
    }
}
const area2 = (a, b) => {
    const ab = (b * a)
    const dec = 0.5
    const calc = ab * dec
    if (calc <= 9) {
        const calcp = calc.toPrecision(3);
        return calcp + ""
    } else if (calc <= 99) {
        const calcp = calc.toPrecision(4);
        return calcp + ""
    } else {
        const calcp = calc.toPrecision(6);
        return calcp + ""
    }
}
//area
// const tperimeter = (btriangle, height) => {
//     return (btriangle * height) / 2 + ' cm^2'
// };
// const noheight = (a, b, c) => {
//     const btriangle = c;
//     const s = (a + b + c) / 2;
//     const desfragmenting = (s * (s - a) * (s - b) * (s - c))
//     if (desfragmenting <= 0) {
//         swal ('Its imposive get a root of negative number try other numbers',{
//             buttons:['']
//         });
//     } else {
//         const height = (Math.sqrt(desfragmenting)) / (btriangle) * 1 / 2;
//         const type = triangles(a, b, c)
//         return 'Heigth of your triangle is ' + height + ' and ' + type;
//     }
// };
// const theight = (lAg, lBg, lb) => {
// if (lAg != lBg) {
//     swal('Its imposive get a root of negative number try other numbers',{
//         buttons:['']
//     });
// }
// if (!lAg, lBg, lb) {
//     return null
// } else {
//         let lAp;
//         const lBp = lb / 2;
//         const lbp = lAg;
//         lAp = Math.sqrt((lbp ** 2) - (lBp ** 2))
//         return lAp;
//     // }
// }
// const triangles = (a, b, c) => {
//     if (a == b && a != c || a == c && a != b) {
//         return 'Your triangle is Isoceles'
//     } else if (a == b && a == c) {
//         return 'Your triangle is Equilatero'
//     } else {
//         return 'Your triangle is Escaleno'
//     }
// }
const isoceles = (a, b, c) => {
    return theight(a, b, c)
}
const PI = Math.PI;
const diameter = (radio) => {
    return radio * 2;
}
const cperimeter = (radio) => {
    const diam = diameter(radio)
    return diam * PI + ' cm'
};
const carea = (radio) => {
    return (radio * radio) * PI + ' cm^2';
}

const listeningC = () => {
    const input = document.querySelector("#InputCircle");
    const button = document.querySelector(".circlea");
    const buttonb = document.querySelector(".circleb");
    const field = input.value.trim();
    button.disabled = (field == "")
    buttonb.disabled = (field == "")
    active(button, input);
    active(buttonb, input);
    avoid(field)
}
const listeningT = () => {
    const input = document.querySelector("#InputTrianglea");
    const button = document.querySelector(".trianglea");
    const buttonb = document.querySelector(".triangleb");
    const field = input.value.trim();
    button.disabled = (field == "")
    buttonb.disabled = (field == "")
    activet(button, input);
    activet(buttonb, input);
    avoidt(field)
}
const listeningS = () => {
    const input = document.querySelector("#InputSquare");
    const button = document.querySelector(".squarea");
    const buttonb = document.querySelector(".squareb");
    const field = input.value.trim();
    button.disabled = (field == "")
    buttonb.disabled = (field == "")
    actives(button, input);
    actives(buttonb, input);
    avoids(field)
}

const textInsert = (result, id = '') => {
    const squeretext = document.querySelector(id);
    const table = document.createElement('div')
    const p1 = document.createElement('p');
    const p2 = document.createElement('p')
    const text = document.createTextNode('Your result is:')
    const text2 = document.createTextNode(result)
    table.classList.add('result')
    p1.classList.add('p1')
    p2.classList.add('p1')
    squeretext.appendChild(table)
    table.appendChild(p1)
    table.appendChild(p2)
    p1.appendChild(text)
    p2.appendChild(text2)
}
const validate = (value, result, id = '', valueb) => {
    if (parseInt(value[0]) <= 0) {
        return swal("Only valid values", {
            buttons: ["OK"]
        });
    }
    textInsert(result, id)
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
const activet = (button, input) => {
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
const actives = (button, input) => {
    const field = input.value.trim();
    let idx = 0;
    button.addEventListener('click', () => {
        if (idx < 1) {
            idx += 1;
            // console.log(idx)
            button.disabled = (field !== "")
        }
        setTimeout(() => {
            idx -= 1;
        }, 10);
    })
}
const avoid = (field) => {
    const div = document.querySelector('.result')
    if (field !== "") {
        div.parentNode.removeChild(div);
    }
}
const avoidt = (field) => {
    const div = document.querySelector('.result')
    if (field !== "") {
        div.parentNode.removeChild(div);
    }
}
const avoids = (field) => {
    const div = document.querySelector('.result')
    if (field !== "") {
        div.parentNode.removeChild(div);
    }
}