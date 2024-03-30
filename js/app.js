document.addEventListener('DOMContentLoaded', function() {
    // Select interface elements
    const inputEmail = document.querySelector('#email');
    const inputSubject = document.querySelector('#subject');
    const inputMessage = document.querySelector('#message');

    // Assign Events
    inputEmail.addEventListener('blur', function(e) {
        console.log(e.target.value);
    });

    inputSubject.addEventListener('blur', function(e) {
        console.log(e.target.value);
    });

    inputMessage.addEventListener('blur', function(e) {
        console.log(e.target.value);
    });
})