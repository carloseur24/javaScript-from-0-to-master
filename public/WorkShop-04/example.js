const section4 = document.querySelector('.results1');
const table0 = document.createElement('table');
const row1 = document.createElement('tr');
const column0 = document.createElement('th');
const column1 = document.createElement('th');
const content1 = document.createTextNode('Citizen');
const content2 = document.createTextNode('Monthly Salary');

section4.appendChild(table0), section4.setAttribute('class', 'table');
table0.appendChild(row1), table0.setAttribute('class', 'left');
row1.appendChild(column0), row1.appendChild(column1);
column0.appendChild(content1), column0.setAttribute('class', 'c1');
column1.appendChild(content2), column1.setAttribute('class', 'c2');

const clasificating = venezuela.map((i) => {
    const row = document.createElement('tr')
    const column = document.createElement('th')
    const column2 = document.createElement('th')
    table0.appendChild(row)
    row.appendChild(column)
    row.appendChild(column2)
    const content1 = document.createTextNode(i.name);
    const content2 = document.createTextNode('$' + i.salary * 4.5);
    column.appendChild(content1)
    column2.appendChild(content2)
    column.setAttribute('class', 'c1')
    column2.setAttribute('class', 'c2')
})
