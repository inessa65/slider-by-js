const carouselSlide =document.querySelector('.carousel__slide');
const carouselImg =document.querySelectorAll('.carousel__slide img');
const prevBtn = document.getElementById('prev');
const nextBtn =document.getElementById('next');

let counter=1;
const size =carouselImg[0].clientWidth;


carouselSlide.style.transform ='translateX('+(-size *counter)+' px)';

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImg.length -1 ) return; // чтобы последю фото при клики быстром не убегало
    carouselSlide.style.transition=" transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform ='translateX('+(-size *counter)+ 'px)';

});

prevBtn.addEventListener('click', ()=>{
    if(counter<=0) return;
    carouselSlide.style.transition ="transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform ='translateX('+(-size *counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImg[counter].id ==='lastClone'){
        carouselSlide.style.transition ="none";
        counter = carouselImg.length -2;
        carouselSlide.style.transform ='translateX('+(-size *counter) + 'px)';
    }
    if(carouselImg[counter].id === 'firstClone'){
        carouselSlide.style.transition ="none";
        counter = carouselImg.length - counter; 
        carouselSlide.style.transform ='translateX('+(-size *counter) + 'px)';
    }
})
