const sperimeter = (side) => {
    return side * 4 + ' cm';
}
const areasquare = (side) => {
    return side * side + ' cm^2';
}
const tarea = (l1triangle, l2triangle, btriangle) => {
    return l1triangle + l2triangle + btriangle + ' cm'
};
const tperimeter = (btriangle, height) => {
    return (btriangle * height) / 2 + ' cm^2'
};
const noheight = (a, b, c) => {
    const btriangle = c;
    const s = (a + b + c) / 2;
    const desfragmenting = (s * (s - a) * (s - b) * (s - c))
    if (desfragmenting <= 0) {
        alert('Its imposive get a root of negative number try other numbers');
    } else {
        const height = (Math.sqrt(desfragmenting)) / (btriangle) * 1 / 2;
        const type = triangles(a, b, c)
        return 'Heigth of your triangle is ' + height + ' and ' + type;
    }
};
const theight = (lAg, lBg, lb) => {
    if (lAg != lBg) {
        alert('Its imposive get a root of negative number try other numbers');
    }
    if (!lAg, lBg, lb) {
        return null
    } else {
        let lAp;
        const lBp = lb / 2;
        const lbp = lAg;
        lAp = Math.sqrt((lbp ** 2) - (lBp ** 2))
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
    const input = document.querySelector("#InputTrianglec");
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
    if (value && valueb <= 0) {
        return alert('Enter a value in all of fields')
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