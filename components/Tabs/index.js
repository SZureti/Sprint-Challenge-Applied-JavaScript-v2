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

////////DOESN'T WORK///////
// .then(data => {
    // console.log("Promise: Lambda Times ", data.data.topics);
    // const content = data.data.topics;
    // content.forEach(content => {
    //     const newTab = createTab(content);
    //     topics.appendChild(newTab);
    // })

//     const topics = document.querySelectorAll('.topics');
//     const tabsArray = data.data.topics;
//     tabsArray.forEach(lambdaTopics => {
//         let newTab = createTabs(lambdaTopics);
//         topics.appendChild(tabsArray);
//     })
//     console.log(data.data.topics);
// })

.then(response => {
    // console.log(response);
    const topics = [];
    response.data.topics.forEach(dataTopic =>{
        topics.push(dataTopic)
        // console.log(`added ${dataTopic} to topics array`)
    });
    topics.forEach(topic => {
        console.log('TOPICS ARE WORKING IN TABS', topic);
        createTab(topic)
    })
})

//CATCH
.catch(error => {
    console.log('ERROR: Tabs Promise Not Working', error);
})


function createTab (topic) {
    const topicsDiv = document.querySelector('.topics');
    const tab = document.createElement('div');

    //APPENDCHILD
    tab.textContent = topic;
    tab.classList.add('tab');
    topicsDiv.appendChild(tab)

    return tab
} 


//CREATE ARRAY FOR TOPICS
// const topic = document.querySelector('.topics')

// const tabsArray = [
//     'javascript',
//     'bootstrap',
//     'technology',
//     'jquery',
//     'node.js',
// ];

// tabsArray.forEach(data => {
//     topic.appendChild(createTabs(data))
// })

//FUNCTION TO CREATE TAB ELEMENTS
// function createTabs(lambdaTopics){
// const tabs = document.createElement('div');
// const tab = document.createElement('div');
// const topics = document.createElement('div');
// const title = document.createElement('span');


// tab.classList.add('tab');
// tab.textContent = lambdaTopics;

//APPENDCHILD

// tabs.appendChild(tab);
// tab.appendChild(topic);
// tab.appendChild(title);
// tab.append(topics, title);
