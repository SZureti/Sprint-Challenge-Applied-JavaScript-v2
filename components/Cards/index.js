// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//CONTAINER
const cards = document.querySelector('.cards-container');

//AXIOS
const promise2 = axios.get('https://lambda-times-backend.herokuapp.com/articles');

//PROMISE
promise2 
    .then(info => {
        console.log('Cards Promise Working Fine', info.data);
    })
//CATCH
    .catch(error => {
        console.log('ERROR: Cards Promise Not Working', error);
    })

//FUNCTION FO CREATE NEW ELEMENTS
function createCards(){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const imgs = document.createElement('img')
    const span =  document.createElement('span')

//CREATE CONTENT
card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');
span.classList.add('span');

//IMAGE
imgs.src = imgUrl;

//CHANGE DISPLAY NAME FOR SPAN TO BY
span.textContent = "By";

//APPEND
card.append(headline, author, imgContainer, span);
imgContainer.appendChild(imgs);
}
