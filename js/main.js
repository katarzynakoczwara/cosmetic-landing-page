const navBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav-mobile');
const navItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
    navBtn.classList.toggle('active');
    nav.classList.toggle('active');
    navItems.forEach(item => item.addEventListener('click', () => {
        nav.classList.remove('active');
        navBtn.classList.remove('active');
    }))
}

navBtn.addEventListener('click', handleNav);
