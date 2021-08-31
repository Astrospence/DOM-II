// Your code goes here
const nav = document.querySelectorAll('header > div > nav > a');
nav.forEach(cb => {
    cb.addEventListener('mouseover', event => {
        cb.style.opacity = '0.5';
    })
})
