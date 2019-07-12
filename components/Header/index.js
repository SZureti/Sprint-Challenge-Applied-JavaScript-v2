// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {}
const mainHeader = document.querySelector('.header-container')
mainHeader.appendChild(createHeader());

//CREATE FUNCTION FOR NEW ELEMENTS
function createHeader(){
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');
    //CREATE CONTENT
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    
    //INPUT INFO
    date.textContent = 'July 12, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';
    
    //APPEND
    header.append(date);
    header.append(title);
    header.append(temp);
    
    return header
}