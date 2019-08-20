var burger = document.querySelector('.forkApp__header-tablet-burger-img');
var burgerMenu = document.querySelector('.forkApp__header-tablet-burgerMenu');
var burgerMenuItem = document.querySelectorAll('.forkApp__header-tablet-burgerMenu-item');

burger.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('open')
})

burgerMenu.addEventListener('click', (e)=> {
    burgerMenuItem.forEach((el)=> {
        el.classList.remove('active');

        if (el === e.target) {
            el.classList.add('active');
        } 
    })
})
