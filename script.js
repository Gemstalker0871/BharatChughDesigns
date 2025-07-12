var splide = new Splide('.portfolio_Splider', {
    type: 'loop',
    perPage: 4,
    autoplay: true,
    pagination: false,
    breakpoints: {
        1000:{
            perPage:3
        },
        768:{
            perPage:2
        },
        500:{
            perPage:1
        },
    },
});

splide.mount();

var splide = new Splide('.Team_Splide', {
    type:'loop',
    perPage: 4,
    perMove: 1,
    autoplay: true,
    pagination: false,
    gap:'2rem',
    breakpoints: {
        1000:{
            perPage:3
        },
        768:{
            perPage:2
        },
        500:{
            perPage:1
        },
    },
});

splide.mount();


let client_link1 = document.querySelector('.client_link1')
let client_link2 = document.querySelector('.client_link2')
let client_link3 = document.querySelector('.client_link3')

let client_det1 = document.querySelector('.client_det1')
let client_det2 = document.querySelector('.client_det2')
let client_det3 = document.querySelector('.client_det3')

client_link1.addEventListener('click', () => {
    client_det1.style.left = '0%'
    client_det1.classList.toggle('add_anim_left')
    client_det1.style.display = 'block'
    client_det2.style.display = 'none'
    client_det3.style.display = 'none'
})
client_link2.addEventListener('click', () => {
    client_det2.style.left = '0%'
    client_det2.classList.toggle('add_anim_left')
    client_det2.style.display = 'block'
    client_det1.style.display = 'none'
    client_det3.style.display = 'none'
})
client_link3.addEventListener('click', () => {
    client_det3.style.left = '0%'
    client_det3.classList.toggle('add_anim_left')
    client_det3.style.display = 'block'
    client_det2.style.display = 'none'
    client_det1.style.display = 'none'
})

const number = document.querySelectorAll('.count');

let interval = 5000;

number.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-count'))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue
        if(startValue >= endValue){
            clearInterval(counter)
        }
    }, duration)
});


const nav_open = document.querySelector('.ri-menu-5-fill')
const menu = document.querySelector('.ul')
const nav_close = document.querySelector('#close_menu')

nav_open.addEventListener('click', () => {
    menu.classList.add('show_menu');
})
nav_close.addEventListener('click', () => {
    menu.classList.remove('show_menu');
})