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