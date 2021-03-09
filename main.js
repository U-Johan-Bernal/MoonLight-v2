document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.navegacion-menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.productos-principales' , {delay: 500});
ScrollReveal().reveal('.contactanos', {delay: 500});
ScrollReveal().reveal('.sociales', {delay: 500});