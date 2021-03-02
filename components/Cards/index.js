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
// const cards = document.querySelector('.cards-container');

//AXIOS
// const promise2 = 
axios.get('https://lambda-times-backend.herokuapp.com/articles')

//PROMISE ///////////////NOT WORKING/////////////

// promise2 
    // .then(data => {
    //     console.log('Cards Promise Working Fine', data);
    //     const newArticle = Object.newArt(data.data.articles);
    //     newArticle.forEach(topic => {
    //         const attrs = topic[1];
    //         attrs.forEach(a => {
    //             const article = createArticle(a.headline, a.authorName, a.authorPhoto);
    //             cards.appendChild(article);
    //         })
    //     })
    //  })

        // const topicList = data.data.articles;
        // console.log(topicList);

        // const topicsArray = data.data.articles;
        // topicsArray.forEach(topic => { 
        //     topic.forEach(article => {
        //         const createCards = topicsArray(article);
        //         cardsContainer.appendChild(createCards);
        //     })
        // })

.then(res => {
    const newArticles = res.data.articles;
    console.log('newArticles: ', newArticles);
    newArticles.javascript.forEach(createCard);
    newArticles.bootstrap.forEach(createCard);
    newArticles.technology.forEach(createCard);
    newArticles.jquery.forEach(createCard);
    newArticles.node.forEach(createCard);
        })

//CATCH
    .catch(error => {
        console.log('ERROR: Cards Promise Not Working', error);
    })

        
//FUNCTION FO CREATE NEW ELEMENTS
// function createCards(title, authorName, photo){
function createCard(article){
    const cardsContainer = document.querySelector('.cards-container');
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img')
    const authorBy = document.createElement('span')

//APPEND
    // card.append(headline, author, imgContainer, name, span);
    cardsContainer.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(authorBy);
    author.appendChild(imgContainer);
    author.appendChild(authorImg);

//CREATE CONTENT

headline.textContent = article.headline;
const authorName = article.authorName;
authorBy.textContent = `By: ${authorName}`;
authorImg.src = article.authorPhoto;

card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');
authorImg.style.width = '50px';

//////////DIDN'T WORK//////////////
//IMAGE
// imgs.src = imgUrl;
// imgs.src = `${author.authorPhoto}`;

// headline.textContent = `${headline.headline}`;
// name.textContent = `By ${author.authorName}`;

// headline.textContent = title;
// name.textContent = authorName;
// imgs.src = photo;


}
