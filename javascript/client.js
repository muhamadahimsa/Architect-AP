gsap.registerPlugin(ScrollTrigger);
let lenis;

const initLenis = () => {
    lenis = new Lenis({
        smoothWheel: true,
        smoothTouch: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
}

window.onload = () => {
    initLenis();
};

const overlay = document.querySelector('.info');
const closeBtn = document.querySelector('.close-btn');

const tl = gsap.timeline({ paused: true, overwrite: 'auto' });

tl.to(overlay, {
    duration: .5,
    top: '0%',
    duration: 1,
    ease: 'power3.inOut',
});

const open = document.querySelector('.open-btn');
open.addEventListener('click', function() {
    tl.play();
})

closeBtn.addEventListener('click', () => {
    tl.reverse();
})