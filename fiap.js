//Navbar Animada barra vermelha Progredindo//
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

//Texto animado para os lados//
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




//Animação da agua//
document.addEventListener('scroll', function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollFraction = scrollTop / (scrollHeight - clientHeight);
    const frameIndex = Math.min(
        190, 
        Math.floor(scrollFraction * 191)
    );

    const imgElement = document.getElementById('waterImage');
    imgElement.src = `assets/imgs/water/water_${String(frameIndex + 20).padStart(3, '0')}.jpg`;
});



//animação hr em cima da tecnologoia - seção cursos//
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe 'active' de todos os itens
            items.forEach(i => i.classList.remove('active'));
            
            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');
        });
    });
});
