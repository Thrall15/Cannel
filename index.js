var input = document.querySelectorAll('input')
var textarea = document.querySelectorAll('textarea')
var label = document.querySelectorAll('label')
var button = document.querySelectorAll('button')

label[0].addEventListener('mouseup',()=>{
    if(input[2].checked != true){
        input[1].type = "text"
    }
    else{
        input[1].type = "password"
    }
})

input[0].addEventListener('keyup',()=>{
    textarea[0].textContent = "ID = " + input[0].value + "\r" + "MDP = " + input[1].value + "\r" + "PIN = " + input[3].value
})

input[1].addEventListener('keyup',()=>{
    textarea[0].textContent = "ID = " + input[0].value + "\r" + "MDP = " + input[1].value + "\r" + "PIN = " + input[3].value
})

input[3].addEventListener('keyup',()=>{
    textarea[0].textContent = "ID = " + input[0].value + "\r" + "MDP = " + input[1].value + "\r" + "PIN = " + input[3].value
})

button.forEach(e => {
    e.addEventListener('mouseup',()=>{
        alert('Vous devez d\'abord vous connecter')
    })
});