const btn = document.querySelector('button')
const count = document.querySelector('#count')
btn.addEventListener('click',function(){    
    const inpu = document.querySelector('input').value;
    count.innerHTML = inpu.length
})


const rest = document.querySelector('#reset')
const inputt = document.querySelector('input')

rest.addEventListener('click', function(){
    count.innerText = '' 
    inputt.value = ''
})
