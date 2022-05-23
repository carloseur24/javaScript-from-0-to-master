let i = 0;
const generator = () => {
    const numbers = document.querySelector('#input').value;
    const split = numbers.split(' ')
    console.log(i)
    if (i==1){
        return window.location.reload()
    }
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
        const text = document.createTextNode(result)
        options.appendChild(text);
        i++
    }
}

