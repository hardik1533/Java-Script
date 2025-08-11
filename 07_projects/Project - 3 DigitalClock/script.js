const clock = document.getElementById('clock')

// stInterval Method : 
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},1000)