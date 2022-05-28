const generator = () => {
    const numbers = document.querySelector('#input').value;
    const split = numbers.split(' ')
    if (split.length < 3) {
        swal('Enter your list', {
            buttons: ['']
        })
        return false
    }
    if (split.length > (parseInt(option.value))) {
        swal('The length of your list is different that your selected', {
            buttons: ['']
        })
    } else if (split.length< (parseInt(option.value))) {
        swal('The length of your list is different that your selected', {
            buttons: ['']
        })
    } else {
        const result = aritmeticMean(split)
        const options = document.querySelector('.result')
        const parraph = document.createElement('p')
        parraph.setAttribute('id','result')
        options.appendChild(parraph)
        const text = document.createTextNode(result)
        parraph.appendChild(text);
        i++
    }
}

