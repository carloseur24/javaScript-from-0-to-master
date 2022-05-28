const p = document.createElement('p')
let saveCapacity;
let expenses;

const ejecutionTime = () => {
    if (p) {
        button.hidden = true
        setTimeout(() => {
            button.removeAttribute('hidden')
        }, 1000);
        if (done == 1) {
            return reset();
        } else {
            planTable()
            setTimeout(() => {
                getAdvice()
                done = 1;
            }, 1000);
        }
    }
}

const reset = () => {
    window.location.reload()
}

const planTable = () => {
    const column = document.createElement('th');
    const column1 = document.createElement('th');
    const column2 = document.createElement('th');
    const table = document.createElement('table');
    const section3 = document.getElementById('save3');
    const p2 = document.createElement('p');
    text = document.createTextNode('Save this amout for 1 year and will have: $' + saveCapacity * 12 + '(' + 12 * 100 + '%)');
    section3.appendChild(p2), section3.appendChild(table);
    p2.appendChild(text), p2.setAttribute('class', 'c3')
    for (let i = 1; i <= 12; i++) {
        const row = document.createElement('tr');
        const row1 = document.createElement('tr');
        const row2 = document.createElement('tr');
        const saving = document.createTextNode('Month ' + i);
        const saving1 = document.createTextNode('+  ' + ((i - 1) * 100) + '%');
        const saving2 = document.createTextNode('+  $' + saveCapacity * i);
        table.appendChild(column), table.appendChild(column1), table.appendChild(column2);
        column.append(row), column1.append(row1), column2.append(row2);
        row.appendChild(saving), row1.appendChild(saving1), row2.appendChild(saving2);
        column.setAttribute('class', 'center'), column1.setAttribute('class', 'center'), column2.setAttribute('class', 'center');
        table.setAttribute('class', 'c3')
    }
}