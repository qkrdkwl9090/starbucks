// HEADER 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
})
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})
// HEADER - BADGE
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){   
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })               
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 100,            
            display: 'block'
        }) 
    }
},300));
// VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index +1 ) * .7,
        opacity: 1
    });
});
// NOTICE
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop:true
});
// PROMOTION
new Swiper('.promotion .swiper-container',{
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,    
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination:{
        el:'.promotion .swiper-pagination',
        clickable:true
    },
    navigation:{
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})
// PROMOTION-TOGGLE
const promotionEl= document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
})