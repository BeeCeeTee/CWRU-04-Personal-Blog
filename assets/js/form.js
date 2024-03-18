const submitButtonEl = $('#submit');
const usernameInput = $('#username');
const titleInput = $('#title');
const contentInput = $('#content');

// function saveInput() {
//     const blogPost = {
//         username: usernameInput.val(),
//         title: titleInput.val(),
//         content: contentInput.val()
//     };

//     localStorage.setItem("blogPost", JSON.stringify(blogPost));
// }

submitButtonEl.on('click', function() {
    // saveInput();
    // if (usernameInput !== null && titleInput !== null && contentInput !== null) {
        localStorage.setItem('username', usernameInput.val());
        localStorage.setItem('title', titleInput.val());
        localStorage.setItem('content', contentInput.val());
    // }
    // else {
        // alert('Please enter your name, a title, and some content.')
        // }
});
