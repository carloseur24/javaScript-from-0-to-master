// perímetro del cuadrado = b*4
// área del cuadrado = l*l
// ====================
// área del triángulo = l+l+l
// perímetro del triíngulo = (b*a)/2
// ======================
// perímetro del circulo = diámetro * PI
// área de un circulo = radio *radio * PI
// ======================
console.clear()

console.group()
const sideS = 5;
const sperimeter = (side) => {
    return side * 4 + ' cm';
}
const areasquare = (side) => {
    return side * side + ' cm^2';
}
console.log(areasquare(sideS))
console.log(sperimeter(sideS))

// console.log('The squere`s sides sizing: ' + lsquare);
// console.log('My squere has a perimeter of ' + sperimeter);
// console.log('Also has an Area of ' + sarea)
console.groupEnd()

console.log('===========================')

console.group()

const tarea = (l1triangle, l2triangle, btriangle) => {
    return l1triangle + l2triangle + btriangle + ' cm'
};
const tperimeter = (btriangle, height) => {
    return (btriangle * height) / 2 + ' cm^2'
};
const noheight = (a, b, c) => {
    // if (desfragmenting<=0){
    //     const positive=Math.abs(desfragmenting)
    //     const height = (Math.sqrt(positive)) / (btriangle) * 1 / 2 ;
    //     return height;
    // } else {
    //     const height = (Math.sqrt(desfragmenting)) / (btriangle) * 1 / 2 ;
    //     return height;
    // }
    const btriangle = c;
    const s = (a + b + c) / 2;
    const desfragmenting = (s * (s - a) * (s - b) * (s - c))
    if (desfragmenting <= 0) {
        console.error('Its imposive get a root of negative number try other numbers');
    } else {
        const height = (Math.sqrt(desfragmenting)) / (btriangle) * 1 / 2;
        const type = triangles(a, b, c)
        return 'Heigth of your triangle is ' + height + ' and ' + type;
    }

};

const theight = (lAg, lBg, lb) => {
    if (lAg != lBg) {
        alert.error('Its imposive get a root of negative number try other numbers');
    } else {
        let lAp;
        const lBp = lb / 2;
        const lbp = lAg;
        lAp = Math.sqrt((lbp ** 2)-(lBp ** 2))
        return lAp;
    }
}

const triangles = (a, b, c) => {
    if (a == b && a != c || a == c && a != b) {
        return 'Your triangle is Isoceles'
    } else if (a == b && a == c) {
        return 'Your triangle is Equilatero'
    } else {
        return 'Your triangle is Escaleno'
    }
}

const isoceles = (a, b, c) => {
    return theight(a, b, c)
}

// console.log('The triangle`s sides sizing: ' + l1triangle + ', ' + l2triangle + ', ' + btriangle);
// console.log('The triangle`s height size: ' + height);
// console.log('My triangle has a perimeter of ' + tperimeter);
// console.log('Also has an Area of ' + tarea)
console.groupEnd()

console.log('===========================')

console.group()
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

// console.log('The circle has a radio of: ' + radio + ' and a diameter of: ' + diameter + ' and if we remenber PI is: ' + pi);
// console.log('My squere has a perimeter of ' + cperimeter);
// console.log('Also has an Area of ' + area)
console.groupEnd()

// html zone 
function calculatePerimeterSquare() {
    const input = document.getElementById('InputSquare')
    const value = input.value;
    const perimeter = sperimeter(value);
    alert(perimeter);
}

function calculateAreaSquare() {
    const input = document.getElementById('InputSquare')
    const value = input.value;
    const area = areasquare(value);
    alert(area);
}

// triangle

function calculateAreaTriangle() {
    const inputa = document.getElementById('InputTrianglea')
    const inputb = document.getElementById('InputTriangleb')
    const inputc = document.getElementById('InputTrianglec')
    const valuea = parseInt(inputa.value);
    const valueb = parseInt(inputb.value);
    const valuec = parseInt(inputc.value);
    const area = tarea(valuea,valueb,valuec);
    alert(area);
}

function calculatePerimeterTriangle() {
    const inputa = document.getElementById('InputTrianglea')
    const inputb = document.getElementById('InputTriangleb')
    const inputc = document.getElementById('InputTrianglec')
    const valuea = parseInt(inputa.value);
    const valueb = parseInt(inputb.value);
    const valuec = parseInt(inputc.value);
    const height = theight(valuea,valueb,valuec)
    const perimeter = tperimeter(valuec,height);
    alert(perimeter);
}

// Circle

function calculateAreaCircle() {
    const input = document.getElementById('InputCircle')
    const value = input.value;
    const perimeter = carea(value);
    alert(perimeter);
}

function calculatePerimeterCircle() {
    const input = document.getElementById('InputCircle')
    const value = input.value;
    const area = cperimeter(value);
    alert(area);
}