// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//CONTAINER
const tabs = document.querySelector('.tabs');

//AXIOS
const promise = axios.get('https://lambda-times-backend.herokuapp.com/topics');

//Promise
promise
.then(response => {
    console.log("Promise: Lambda Times ", response.data);
    const tabs = document.querySelectorAll('.tabs');
})

//CATCH
.catch(error => {
    console.log('ERROR: Promise Not Working', error);
})

//FUNCTION TO CREATE TAB ELEMENTS
function createTabs(lambdaTopics){
const tabs = document.createElement('div');
const tab = document.createElement('div');
const topics = document.createElement('div');
const title = document.createElement('span');

//APPENDCHILD
tabs.appendChild(tab);
tab.append(topics, title);

return tabs
}