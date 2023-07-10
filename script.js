const btn = document.querySelector('.adbro-scroll__btn_next')
const slider = document.querySelector('.adbro-scroll__cards')
let offset = 0 

btn.addEventListener('click', function(){
    offset = offset + 180
    if(offset > 180){
        offset = 0
    }
    slider.style.left = -offset + 'px'
})