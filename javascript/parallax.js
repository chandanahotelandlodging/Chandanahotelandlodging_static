// location.replace("index.jsp#");

const parallax = document.getElementById('parallax');
const navbar = document.querySelector('.navbar');
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY= offset * 0.7 + 'px';
})
