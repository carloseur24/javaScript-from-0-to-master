// perímetro del cuadrado = b*4
// área del cuadrado = l*l
// ====================
// área del triángulo = l+l+l
// perímetro del triíngulo = (b*a)/2
// ======================
// perímetro del circulo = diámetro * PI
// área de un circulo = radio *radio * PI
// ======================

const calculatePerimeterSquare = () => {
    const input = document.getElementById('InputSquare')
    const value = input.value;
    const perimeter = sperimeter(value);
    validate(value, perimeter, "#i1");
}
const calculateAreaSquare = () => {
    const input = document.getElementById('InputSquare')
    const value = input.value;
    const area = areasquare(value);
    validate(value, area, "#i1");
}
const calculateAreaTriangle = () => {
    const inputa = document.getElementById('InputTrianglea')
    const inputb = document.getElementById('InputTriangleb')
    const inputc = document.getElementById('InputTrianglec')
    const valuea = parseInt(inputa.value);
    const valueb = parseInt(inputb.value);
    const valuec = parseInt(inputc.value);
    const area = tarea(valuea, valueb, valuec);
    validate(valuea, area, "#i2",valueb);
}

const calculatePerimeterTriangle = () => {
    const inputa = document.getElementById('InputTrianglea')
    const inputb = document.getElementById('InputTriangleb')
    const inputc = document.getElementById('InputTrianglec')
    const valuea = parseInt(inputa.value);
    const valueb = parseInt(inputb.value);
    const valuec = parseInt(inputc.value);
    const height = theight(valuea, valueb, valuec)
    const perimeter = tperimeter(valuec, height);
    validate(valuea, perimeter, "#i2",valueb);
}
const calculatePerimeterCircle = () => {
    const input = document.getElementById('InputCircle')
    const button = document.querySelector(".circlea");
    const value = input.value;
    const perimeter = cperimeter(value);
    validate(value, perimeter, "#i3");
}
const calculateAreaCircle = () => {
    const input = document.querySelector("#InputCircle");
    const button = document.querySelector(".circleb");
    const value = input.value;
    const area = carea(value);
    validate(value, area, "#i3");
}

