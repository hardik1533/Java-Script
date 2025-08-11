const form = document.querySelector('form')

form.addEventListener('submit',e => {
    e.preventDefault()
    const h = parseInt(document.querySelector('#height').value)
    const w = parseInt(document.querySelector('#weight').value)
    const r = document.querySelector('#result')
    const n = document.querySelector('#note')

    if(h === '' || h <= 0 || isNaN(h)){
        r.innerHTML = "Please enter a valid height :("
    }
    else if(w === '' || w <= 0 || isNaN(w)){
        r.innerHTML = "Please enter a valid weight :("
    }
    else {
        const bmi = (w / ((h*h)/10000)).toFixed(2)
        r.innerHTML = `Your BMI ~ ${bmi}`
        if(bmi < 18.6){
            n.style.color = 'red'
            n.innerHTML = 'Under Weight :('
        }else if(bmi >= 18.6 && bmi <= 24.9){
            n.style.color = 'green'
            n.innerHTML = 'Normal Weight :)'
        }else {
            n.style.color = 'red'
            n.innerHTML = 'Over Weight :('
        }
    }
})