let outputSection = document.getElementById('output-section');
const backButton = document.getElementById('back');

function displayUserInput() {
    // let blogPostItem = JSON.parse(localStorage.getItem("blogPost"));
    //     outputSection.textContent = blogPostItem;
    //     outputSection.textContent = blogPostItem;
    //     outputSection.textContent = blogPostItem;
    //     console.log(blogPostItem);
    
    let getUsername = localStorage.getItem('username');
    let getTitle = localStorage.getItem('title');
    let getContent = localStorage.getItem('content');
    
    let titleOut = document.createElement('h4');
        titleOut.setAttribute('style', 'border-bottom: 1px solid var(--accent)')
    let titleText = document.createTextNode(getTitle);
    titleOut.appendChild(titleText);

    let contentOut = document.createElement('p');
        contentOut.setAttribute('style', 'font-style: italic')
    let contentText = document.createTextNode(getContent);
    contentOut.appendChild(contentText);

    let userOut = document.createElement('p');
    let userText = document.createTextNode(`Posted by: ${getUsername}`);
    userOut.appendChild(userText);

    let article = document.createElement('article');
        article.setAttribute('style', 'border: 2px solid var(--accent); margin: 10px; padding: 10px; display: flex; flex-direction: column')
        article.appendChild(titleOut);
        article.appendChild(contentOut);
        article.appendChild(userOut);

    let outputEl = document.getElementById('output-section')
    outputEl.appendChild(article);
}

displayUserInput();
