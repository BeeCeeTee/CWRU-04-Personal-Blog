// Get input array from local storage and parse it
function displayUserInput() {
    let blogOutput = JSON.parse(localStorage.getItem('output'));

    // Iterate through each property of each object within the array and store them to new variables
    for (let i = 0; i < blogOutput.length; i++) {

        let getUsername = blogOutput[i].username;
        let getTitle = blogOutput[i].title;
        let getContent = blogOutput[i].content;
        
        // Dynamically create and style new elements, set the text content to the saved user input, and append them to their parent elements
        let titleOut = document.createElement('h4');
            titleOut.setAttribute('style', 'border-bottom: 1px solid var(--accent)')
        let titleText = document.createTextNode(getTitle);
        titleOut.appendChild(titleText);

        let contentOut = document.createElement('p');
            contentOut.setAttribute('style', 'font-style: italic')
        let contentText = document.createTextNode(getContent);
        contentOut.appendChild(contentText);

        let userOut = document.createElement('p');
            userOut.setAttribute('style', 'color: var(--accent)')
        let userText = document.createTextNode(`Posted by: ${getUsername}`);
        userOut.appendChild(userText);

        let article = document.createElement('article');
            article.setAttribute('style', 'border: 2px solid var(--accent); margin: 10px; padding: 10px; display: flex; flex-direction: column')
            article.appendChild(titleOut);
            article.appendChild(contentOut);
            article.appendChild(userOut);

        let outputEl = document.getElementById('output-section')
        outputEl.appendChild(article);
}}

displayUserInput();
