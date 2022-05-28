const advices = [
    'create a record of your diary expenses',
    'include savings in your budget',
    'ditch those unnecessary expenses',
    'set goals in based on savings',
    'set priorities about yourself and how to use your savings',
    'Choose the right tools and enjoy of Auto-Saving',
    'Enjoy watching your savings grow'
]
const getAdvice = () => {
    const table = document.createElement('table');
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    text = document.createTextNode('Some tips to save better') 
    p2.appendChild(text)
    const advice = advices.map((i) => {
        const row1 = document.createElement('tr');
        text = document.createTextNode('# ' + i)
        section2.appendChild(p2)
        section2.appendChild(p3)
        p2.setAttribute('class', 'tips')
        p3.appendChild(table), p3.setAttribute('class', 'tips2')
        table.appendChild(row1)
        row1.appendChild(text)
    })
}