const outputSection = $('#output-section');

function displayUserInput() {
    const blogPostItem = JSON.parse(localStorage.getItem('blogPost'));
    console.log(blogPostItem);
    // const div = document.createElement('div');
    
    // const titleOut = document.createElement('h4');
    // titleOut.textContent = blogPosts.title;
    // div.appendChild(titleOut);
    
    // const contentOut = document.createElement('p');
    // contentOut.textContent = blogPosts.content;
    // div.appendChild(contentOut);

    // const userOut = document.createElement('p');
    // userOut.textContent = blogPosts.username;
    // div.appendChild(userOut);

    // document.body.appendChild(div);

    // console.log(localStorage.getItem('username'));
    // console.log(localStorage.getItem('title'));
    // console.log(localStorage.getItem('content'));
}


function init() {
    displayUserInput();
  }

  init();
