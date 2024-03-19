const submitButtonEl = $('#submit');
const usernameInput = $('#username');
const titleInput = $('#title');
const contentInput = $('#content');
let output = [];

// Save form input into an object, then stringify and push into an array. Also redirect page to blog.html.
function saveInput() {
    const blogPost = {
        username: usernameInput.val(),
        title: titleInput.val(),
        content: contentInput.val()
    };
        output.push(blogPost);
        localStorage.setItem("output", JSON.stringify(output));
    location.href="/blog.html";
}

// Listen for form submission, prevent default window action and run the saveInput function
$('#form').on('submit', function(event) {
    event.preventDefault();
    saveInput();
});

// Get previous input from local storage, if any, and save it to the array
if (localStorage.getItem('output')) {
    output = JSON.parse(localStorage.getItem('output'));
}
