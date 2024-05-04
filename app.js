// ------------PROJECT----------

let textInput = document.getElementById('textInput')
let submitBtn = document.getElementById('submitBtn')
let pTag = document.getElementById('pTag')
let textEntered = ''

const captureInput = (event) => {
    textEntered = event.target.value
}

const displayText = () => {
    pTag.innerText = textEntered
}
textInput.addEventListener('change', captureInput)
submitBtn.addEventListener('click', displayText)

// ---------API call------------
// const getData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     console.log(response)
// }
// getData()
// --------Async await-----------

const getData = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // console.log(response)
}
getData()

// ----------async function-----

const asyncFunction = async () => {
    const response = await fetch('url')
    console.log(response)
}

// ---------------EXAMPLE-------------
const getiinData = async () => {
    console.log('before await') //2
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    console.log('after await') //4
    console.log(response) //5
}

console.log('before asyncfn call')//1
getiinData()
console.log('after asyncfn call') //3

// before asyncfn call
//  before await
//  after asyncfn call
//  Response
// after await

// but now without async, await

const getinnData = () => {
    console.log('before await') //2
    const response = fetch('https://jsonplaceholder.typicode.com/posts/1')
    console.log('after await') //3
    console.log(response) //4
}

console.log('before asyncfn call')//1
getinnData()
console.log('after asyncfn call') //5

// before asyncfn call
//  before await
//  after await
// Promise {<pending>}//response
// after asyncfn call

// *****************************************

