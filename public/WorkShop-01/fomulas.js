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
};
const area3 = (a, b, c) => {
    const l1 = (a + b + c);
    const l2 = (-a + b + c);
    const l3 = (a - b + c);
    const l4 = (a + b - c);
    const lr = l1 * l2 * l3 * l4;
    const rlr = Math.sqrt(lr)
    const calc = 0.25 * rlr;
    return toPrecision(calc)
}
const area2 = (a, b) => {
    const ab = (b * a)
    const dec = 0.5
    const calc = ab * dec
    return toPrecision(calc)
}

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