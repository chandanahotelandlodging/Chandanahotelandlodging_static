const n = document.querySelector('nav');
const d = document.querySelector('.date');

d.setAttribute('style', 'margin-top: 2vh;');

let w = document.querySelector('.sidebar').offsetWidth

document.querySelector('.cards').setAttribute('style', 'margin-left: '+w+'px;')

// document.querySelector('.content').setAttribute('style', 'margin-top: '+d.offsetHeight+'px;');