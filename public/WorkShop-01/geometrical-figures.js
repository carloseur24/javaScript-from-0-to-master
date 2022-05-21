// perímetro del cuadrado = b*4
// área del cuadrado = l*l
// ====================
// perimeter del triangule = l+l+l
// area del triangule = (b*a)/2
// ======================
// perímetro del circulo = diámetro * PI
// área de un circulo = radio *radio * PI
// ======================

const calculatePerimeterSquare = () => {
    const input = document.getElementById('InputSquare')
    const value = input.value;
    const value2 = value.split(" ")
    const perimeter = sperimeter(value2);
    if (perimeter) {
        if (typeof perimeter === 'object' &&
            !Array.isArray(perimeter) &&
            perimeter !== null) {
            alersweet2()
        } else {
            validate(value2, perimeter, "#i1");
        }
    }
}
const calculateAreaSquare = () => {
    const input = document.getElementById('InputSquare')
    const value = input.value;
    const value2 = value.split(" ")
    const area = areasquare(value2);
    if (area) {
        if (typeof area === 'object' &&
            !Array.isArray(area) &&
            area !== null) {
            alersweet2()
        } else {
            validate(value2, area, "#i1");
        }
    }
}
const calculatePerimeterTriangle = () => {
    const input = document.getElementById('InputTrianglea')
    const value = input.value;
    const value1 = value.split(" ");
    const l = value1.length
    console.log(value1)
    if (l >= 4) {
        alersweet1()
    } else if (l == 2) {
        alersweet1()
    } else if (value1.length == 1) {
        const area = tperimeter(parseInt(value1[0]), parseInt(value1[0]), parseInt(value1[0]));
        validate(value1, area, "#i2");
    } else {
        const area = tperimeter(parseInt(value1[0]), parseInt(value1[1]), parseInt(value1[2]));
        console.log(value1)
        validate(value1, area, "#i2");
    }
} 
const calculateAreaTriangle = () => {
    const input = document.getElementById('InputTrianglea')
    const value = input.value;
    const value1 = value.split(" ");
    const l = value1.length
    if (l >= 4) {
        alersweet1()
    } else if (l == 2) {
        const result = area2(parseInt(value1[0]), parseInt(value1[1]));
        validate(value1, result, "#i2");
    } else if (l == 1) {
        const result = area3(parseInt(value1[0]), parseInt(value1[0]), parseInt(value1[0]));
        validate(value1, result, "#i2");
    } else {
        const result = area3(parseInt(value1[0]), parseInt(value1[1]), parseInt(value1[2]));
        validate(value1, result, "#i2");
    }
}
const calculatePerimeterCircle = () => {
    const input = document.getElementById('InputCircle')
    const button = document.querySelector(".circlea");
    const value = input.value;
    const value1 = [value]
    const perimeter = cperimeter(value);
    validate(value1, perimeter, "#i3");
}
const calculateAreaCircle = () => {
    const input = document.querySelector("#InputCircle");
    const button = document.querySelector(".circleb");
    const value = input.value;
    const value1 = [value]
    const area = carea(value);
    validate(value1, area, "#i3");
}