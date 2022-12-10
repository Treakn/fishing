const burger= document.querySelector('.burger')
const mobile= document.querySelector('.mobile-items')
burger.addEventListener('click',()=>{
    burger.classList.toggle('is-active')
    mobile.classList.toggle('active')
} )