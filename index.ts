let number = document.querySelector("#number-1")
let number_ = document.querySelector("#number-2")
let button = document.querySelector(".somar")
let resultado = document.querySelector(".resultado")
 
button.addEventListener("click",(a: number,b: number)=>{
    a = number.value
    b = number_.value
    
    resultado.innerText = a*b
})
