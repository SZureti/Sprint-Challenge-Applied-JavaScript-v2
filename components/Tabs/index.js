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
// const tabs = document.querySelector('.tabs');
const topics = document.querySelector('.topics');

//AXIOS
// const promise = 
axios.get('https://lambda-times-backend.herokuapp.com/topics')

//Promise
// promise
.then(data => {
    console.log("Promise: Lambda Times ", data.data.topics);
  ////////DOESN'T WORK///////
    // const content = data.data.topics;
    // content.forEach(content => {
    //     const newTab = createTab(content);
    //     topics.appendChild(newTab);
    // })

    // const tabs = document.querySelectorAll('.tabs');
    const topics = document.querySelectorAll('.topics');
    const tabsArray = data.data.topics;
    tabsArray.forEach(lambdaTopics => {
        let newTab = createTabs(lambdaTopics);
        topics.appendChild(tabsArray);
    })
    console.log(data.data.topics);
})

//CATCH
.catch(error => {
    console.log('ERROR: Tabs Promise Not Working', error);
})

//CREATE ARRAY FOR TOPICS
const topic = document.querySelector('.topics')

const tabsArray = [
    'javascript',
    'bootstrap',
    'technology',
    'jquery',
    'node.js',
];

tabsArray.forEach(data => {
    topic.appendChild(createTabs(data))
})

//FUNCTION TO CREATE TAB ELEMENTS
function createTabs(lambdaTopics){
const tabs = document.createElement('div');
const tab = document.createElement('div');
const topics = document.createElement('div');
const title = document.createElement('span');

//
tab.classList.add('tab');
tab.textContent = lambdaTopics;

//APPENDCHILD
tabs.appendChild(tab);
// tab.appendChild(topic);
// tab.appendChild(title);
tab.append(topics, title);

return tab
}