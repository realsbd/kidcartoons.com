const menuBtn = document.getElementById('menu-btn')
const navItem = document.querySelector('.nav-items')

menuBtn.addEventListener('click', function(){
    if (navItem.classList.contains('nav-open')){
        navItem.classList.remove('nav-open')
    }else{
        navItem.classList.add('nav-open')
    }
})
