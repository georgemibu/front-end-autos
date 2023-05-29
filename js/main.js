const images = [
    '/img/cover1.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg'
];

let index = 0;
const max = images.length;

//Get the DOM elements
const containerElement = document.querySelector(`.container`);
const prevSlideButton = document.querySelector(`.prevSlide`);
const nextSlideButton = document.querySelector(`.nextSlide`);

//listen for arrow click events
prevSlideButton.addEventListener(`click`, function(){
    index--;
    //set image index
    setImageIndex();
    //change background image  
    changeBackgroundImage(images[index], containerElement);
});
nextSlideButton.addEventListener('click', function () {
    index++;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
  });

//utility function
function setImageIndex() {
    if (index < 0) {
        index = max - 1;
    } else if (index >= max) {
        index = 0;
    }
};
  
  function changeBackgroundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`;
  };
