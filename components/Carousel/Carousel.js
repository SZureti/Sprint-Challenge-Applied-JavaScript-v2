/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
//CREATE FUNCTION FOR CAROUSEL 
function createCarousel(){

  //DEFINE ELEMENTS
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const rightButton = document.createElement('div')
  const imgMtns = document.createElement('img')
  const imgComp = document.createElement('img')
  const imgTree = document.createElement('img')
  const imgTurn = document.createElement('img')

  // APPEND
  const carouselContainer = document.querySelector('.carousel-container')
  carouselContainer.appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);
  carousel.appendChild(imgMtns);
  carousel.appendChild(imgComp);
  carousel.appendChild(imgTree);
  carousel.appendChild(imgTurn);

  // INPUT CONTENT, BUTTONS AND IMAGES
  leftButton.textContent = '<';
  rightButton.textContent = '>';

  // imgMtns.src = "./assets/carousel/mountains.jpeg";
  // imgComp.src = "./assets/carousel/computer.jpeg";
  // imgTree.src = "./assets/carousel/trees.jpeg";
  // imgTurn.src = "./assets/carousel/turntable.jpeg";
 
  // imgMtns.src = url("https://raw.githubusercontent.com/SZureti/Sprint-Challenge-Applied-JavaScript-v2/blob/master/assets/carousel/mountains.jpeg?raw=true");
  // imgComp.src = url("https://raw.githubusercontent.com/SZureti/Sprint-Challenge-Applied-JavaScript-v2/blob/master/assets/carousel/computer.jpeg?raw=true");
  // imgTree.src = url("https://raw.githubusercontent.com/SZureti/Sprint-Challenge-Applied-JavaScript-v2/blob/master/assets/carousel/trees.jpeg?raw=true");
  // imgTurn.src = url("https://raw.githubusercontent.com/SZureti/Sprint-Challenge-Applied-JavaScript-v2/blob/master/assets/carousel/turntable.jpeg?raw=true");
   
  imgMtns.src = "https://i.ibb.co/bvJ72pv/mountains.jpg";
  imgComp.src = "https://i.ibb.co/Wcqkw3M/computer.jpg";
  imgTree.src = "https://i.ibb.co/mBMbQQY/trees.jpg";
  imgTurn.src = "https://i.ibb.co/3BM0gTz/turntable.jpg";

  // STYLE
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  const photos = [imgMtns, imgComp, imgTree, imgTurn]

  // CLICK EVENT FOR BUTTONS THAT STILL DON'T WORK RIGHT NOW
  leftButton.addEventListener('click', event => {
  })
  rightButton.addEventListener('click', event => {
  })
}

createCarousel();