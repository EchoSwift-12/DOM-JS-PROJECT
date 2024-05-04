// ------------PROJECT----------

let textInput = document.getElementById('textInput')
let submitBtn = document.getElementById('submitBtn')
let pTag = document.getElementById('pTag')
let textEntered =''

const captureInput=(event)=>{
    textEntered= event.target.value
}

const displayText =()=>{
    pTag.innerText=textEntered
}


textInput.addEventListener('change',captureInput)
submitBtn.addEventListener('click',displayText)

