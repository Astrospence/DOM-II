// Your code goes here
//#1
const nav = document.querySelectorAll('header > div > nav > a');
nav.forEach(cb => {
    cb.addEventListener('mouseover', event => {
        cb.style.opacity = '0.5';
    })
})
//#2
nav.forEach(cb => {
    cb.addEventListener('mouseout', event => {
        cb.style.opacity = '100';
    })
})
//#3
const body = document.querySelector('body');
body.addEventListener('keydown', event => {
    if (body.style.backgroundColor === 'lightblue'){
        body.style.backgroundColor = 'white';
    }else{
    body.style.backgroundColor = 'lightblue';
    }
}) 
//#4
const bus = document.querySelector('.intro > img');
bus.addEventListener('click', event => {
    bus.style.border = 'solid blue';
})
//#5
window.addEventListener('load', event => {
    console.log('The Page has Loaded Successfully');
})
//#6
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', event => {
    if(funBus.innerText === 'Fun Bus') {
        funBus.textContent = 'Super Fun Bus';
    }else{
        funBus.textContent = 'Fun Bus';
    }
})
//#7
document.addEventListener('copy', event => {
    alert('PLAGARISM INITIATED: CYBER POLICE EN ROUTE');
})
//#8
const p = document.querySelectorAll('p');
visualViewport.addEventListener('resize', event => {
    p.forEach(cb => {
        cb.style.fontWeight = 'bold';
    })
    console.log('The Window was Resized');
})