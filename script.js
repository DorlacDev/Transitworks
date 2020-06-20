function login() {
    let form = document.querySelector('form');
    let legend = document.querySelector('legend');
    let submit = document.querySelector('#submit');
    let button = document.querySelector('button');
    if (legend.textContent == 'Log in to Transitworks') {
        form.setAttribute('action', 'createaccount.py');
        form.setAttribute('method', 'post');
        legend.textContent = 'Create your account';
        submit.setAttribute('value', 'Sign up');
        button.textContent = 'Log in to Transitworks';
    } else {
        form.setAttribute('action', 'login.py');
        form.setAttribute('method', 'get');
        legend.textContent = 'Log in to Transitworks';
        submit.setAttribute('value', 'Log in');
        button.textContent = 'Sign up for Transitworks';
    }
}

var modify = (function() {
    let button = document.querySelector('button');
    button.addEventListener('click', login);
}());