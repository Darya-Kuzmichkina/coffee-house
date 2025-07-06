const btnArrowLeft = document.querySelector('.section2 .center2 .left');
const btnArrowRight = document.querySelector('.section2 .center2 .right');
const centerImg = document.querySelector('.section2 .center2 .center img');
let imgId =0;
const slides = [
    {
        img: "./imgs/coffee-slider-1.png", 
        
    },
    {
        img: "./imgs/coffee-slider-2.png",
    },
    {
        img: "./imgs/coffee-slider-3.png",
    }
];

function scroll() {
    const currentSlide = slides[imgId];
    centerImg.src = currentSlide.img;
    
      const indicators = document.querySelectorAll('.line3 div');
    indicators.forEach((div, i) => {
        div.classList.remove('first');
        if (i === imgId) {
            div.classList.add('first');
        }
    });
}
btnArrowRight.addEventListener('click', next=()=>{
   imgId=(imgId === slides.length - 1) ? 0 : imgId + 1;
      scroll();

});
  btnArrowLeft.addEventListener('click', () => {
        imgId = (imgId === 0) ? (slides.length - 1) : (imgId - 1); 
        scroll();
    });
   scroll();
