const income = document.getElementById('input1');
const fixed = document.getElementById('input2');
const variable = document.getElementById('input3');
const button = document.getElementById('button')
const section = document.getElementById('save');
const section2 = document.getElementById('save2');
let text;
let done = 0;

const calculateSavings = () => {
    const incomeV = parseInt(income.value)
    const fixedV = parseInt(fixed.value)
    const variableV = parseInt(variable.value)
    if (incomeV && fixedV) {
        if (variableV) {
            expenses = fixedV + variableV;
            saveCapacity = incomeV - expenses;
            if (saveCapacity <= 0) {
                text = document.createTextNode('Based in your monthly income, We can tell you that you have a financial Deficit of: $' +
                    saveCapacity + ' and recommend that you create new sources of income to improve your finanacial health')
                section.appendChild(p)
                p.setAttribute('id', 'saveSettings')
                p.appendChild(text)
                button.hidden = true
                setTimeout(() => {
                    button.removeAttribute('hidden')
                    p.remove()
                }, 1000);
            } else {
                text = document.createTextNode('Based in your monthly income, We can tell you that you have a financial Surplus and recommend save: $' +
                    saveCapacity)
                section.appendChild(p)
                p.setAttribute('id', 'saveSettings')
                p.appendChild(text)
                ejecutionTime()
            }
        } else {
            saveCapacity = incomeV - fixedV;
            if (saveCapacity <= 0) {
                text = document.createTextNode('Based in your monthly income, We can tell you that you have a financial Deficit of: $' +
                    saveCapacity + ' and recommend that you create new sources of income to improve your finanacial health')
                section.appendChild(p)
                p.setAttribute('id', 'saveSettings')
                p.appendChild(text)
                button.hidden = true
                setTimeout(() => {
                    button.removeAttribute('hidden')
                    p.remove()
                }, 1000);
            } else {
                text = document.createTextNode('Based in your monthly income, We can tell you that you have a financial Surplus and recommend save: $' +
                    saveCapacity)
                section.appendChild(p)
                p.setAttribute('id', 'saveSettings')
                p.appendChild(text)
                ejecutionTime()
            }
        }
    } else {
        alert('Fill all of data, please')
    }
}