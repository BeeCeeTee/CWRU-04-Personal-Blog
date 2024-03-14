const submitButtonEl = $('#submit');
const usernameInput = $('#username');
const titleInput = $('#title');
const contentInput = $('#content');


submitButtonEl.on('click', function() {

    const userInput = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value.trim(),
    };
    localStorage.setItem('userInput', JSON.stringify(userInput));
});
