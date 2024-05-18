const images = document.querySelectorAll('.item .img img');

const colorArray = [
    '#B69671',
    '#6D7783',
    '#B9A288',
    '#B5B8AC',
    '#A2B0B1',
    '#5F5F5F',
    '#7E98B1',
    '#857F71',
    '#A6A6A6',
    '#B5B4AB',
    '#503D31',
    '#B1A591',
    '#616161',
    '#C29651',
    '#5E6471',
    '#B0A89D',
];

function handleImageClick(event) {
    const imgSrc = event.currentTarget.src;

    const imgNumber = imgSrc.match(/(\d+)\.jpg/)[1];
    // document.body.style.backgroundColor = colorArray[parseInt(imgNumber) - 1];

    const newImgSrc = `./Images/img${imgNumber}.jpg`;

    const previewContainer = document.querySelector('.preview-container');

    const currentLastImg = previewContainer.querySelector('.img:last-child');

    if (currentLastImg) {
        gsap.to(currentLastImg, { duration: 1, scale: 1.5, left: '-50%' });
    }

    const newImg = document.createElement('img');
    newImg.src = newImgSrc;
    newImg.style.position = 'absolute';
    newImg.style.right = '-100%'

    previewContainer.appendChild(newImg);

    gsap.to(newImg, { duration: 1, right: '0%' });
};

images.forEach((img) => {
    img.addEventListener('mouseenter', handleImageClick);
});

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

// gsap.to('.intro', {
//     y: '-100%',
//     duration: 1.4,
//     ease: 'expo.out',
//     delay: 4.3,
//     display: 'none',
// })

// gsap.from('.intro-tag p',{
//     delay: .5,
//     stagger: 0.1,
//     ease: 'power3.inOut',
//     duration: 1,
//     y: '100%'
// })

// gsap.to('.intro-tag p',{
//     delay: 2.5,
//     stagger: 0.1,
//     ease: 'power3.inOut',
//     duration: 1,
//     y: '-100%'
// })