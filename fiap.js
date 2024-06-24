function handleScroll() {
    var navbar = document.querySelector('.navbar');
    var scroll = window.scrollY;
    if (scroll < 40) {
        navbar.classList.remove('nav-bg');
    } else {
        navbar.classList.add('nav-bg');
    }
}
window.addEventListener('scroll', handleScroll);

function updateProgressBar() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('.filled').style.setProperty('--progress', scrollPercent);
}
document.addEventListener('scroll', updateProgressBar);
