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

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.h1', 
        { x: 1500, opacity: 1 }, 
        { x: -1500, 
          scrollTrigger: {
              trigger: '.title',
              start: 'top 80%',
              end: 'bottom 10%',
              scrub: true,
              markers: true
          }
        }
    );

    gsap.fromTo('.h2', 
        { x: -1500, opacity: 1 }, 
        { x: 1500, 
          scrollTrigger: {
              trigger: '.title',
              start: 'top 80%',
              end: 'bottom 10%',
              scrub: true,
              markers: true
          }
        }
    );
});
