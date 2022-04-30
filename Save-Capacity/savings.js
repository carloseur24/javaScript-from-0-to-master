const income = document.getElementById('input1');
const fixed = document.getElementById('input2');
const variable = document.getElementById('input3');
const button = document.getElementById('button')
const section = document.getElementById('save');
const section2 = document.getElementById('save2');
let text;
let done = 0;


// console.log(done);

const getAdvice = () => {
    const table = document.createElement('table');
    const p2 = document.createElement('p')
    text = document.createTextNode('Some tips to save better')
    p2.appendChild(text)
    const advice = advices.map((i) => {
        const row1 = document.createElement('tr');
        text = document.createTextNode('#' + i)
        section2.appendChild(p2)
        p2.appendChild(table)
        p2.setAttribute('class', 'c1')
        table.appendChild(row1)
        row1.appendChild(text)
    })
}


const calculate = () => {
    const plan = () => {
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
    const Time = () => {
        if (p) {
            button.hidden = true
            setTimeout(() => {
                button.removeAttribute('hidden')
                p.remove()
            }, 2000);
            if (done == 1) {
                return reset();
            } else {
                plan()
                setTimeout(() => {
                    getAdvice()
                    done = 1;
                    // console.log(done);
                }, 2000);
            }
        }
    }
    const incomeV = parseInt(income.value)
    const fixedV = parseInt(fixed.value)
    const variableV = parseInt(variable.value)
    const p = document.createElement('p')
    let saveCapacity;
    let expenses;
    if (incomeV && fixedV) {
        if (variableV) {
            expenses = fixedV + variableV;
            saveCapacity = incomeV - expenses;
            if (saveCapacity <= 0) {
                text = document.createTextNode('Based in your monthly income, We can tell you that you have a financial Deficit of: $' + saveCapacity + ' and recommend that you create new sources of income to improve your finanacial health')
                section.appendChild(p)
                p.setAttribute('id', 'saveSettings')
                p.appendChild(text)
                button.hidden = true
                setTimeout(() => {
                    button.removeAttribute('hidden')
                    p.remove()
                }, 10000);
            } else {
                text = document.createTextNode('Based in your monthly income, We can tell you that you have a financial Surplus and recommend save: $' + saveCapacity)
                section.appendChild(p)
                p.setAttribute('id', 'saveSettings')
                p.appendChild(text)
                Time()
            }
        } else {
            saveCapacity = incomeV - fixedV;
            if (saveCapacity <= 0) {
                text = document.createTextNode('Based in your monthly income, We can tell you that you have a financial Deficit of: $' + saveCapacity + ' and recommend that you create new sources of income to improve your finanacial health')
                section.appendChild(p)
                p.setAttribute('id', 'saveSettings')
                p.appendChild(text)
                button.hidden = true
                setTimeout(() => {
                    button.removeAttribute('hidden')
                    p.remove()
                }, 10000);
            } else {
                text = document.createTextNode('Based in your monthly income, We can tell you that you have a financial Surplus and recommend save: $' + saveCapacity)
                section.appendChild(p)
                p.setAttribute('id', 'saveSettings')
                p.appendChild(text)
                Time()
            }
        }
    } else {
        alert('Fill all of data, please')
    }
}
const reset = () => {
    window.location.reload()
}