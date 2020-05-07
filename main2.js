function somar(){
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.querySelector('input#txtn2')
    let res = window.document.getElementById('res')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 + n2 
    res.innerHTML = `A soma dos valores é ${s}`
}

function sub(){
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.querySelector('input#txtn2')
    let res = window.document.getElementById('res')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 - n2 
    res.innerHTML = `A subtração dos valores é ${s}`
}
function div(){
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.querySelector('input#txtn2')
    let res = window.document.getElementById('res')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 / n2 
    res.innerHTML = `A divisão dos valores é ${s}`
}
function mult(){
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.querySelector('input#txtn2')
    let res = window.document.getElementById('res')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 * n2 
    res.innerHTML = `A multiplicação dos valores é ${s}`
}