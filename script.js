function login() {
    let form = document.querySelector('form');
    let legend = document.querySelector('legend');
    let submit = document.querySelector('#submit');
    let button = document.querySelector('button');
    if (legend.textContent == 'Login') {
        form.setAttribute('action', 'createaccount.py');
        form.setAttribute('method', 'post');
        legend.textContent = 'Create Account';
        submit.setAttribute('value', 'Create Account');
        button.textContent = 'login';
    } else {
        form.setAttribute('action', 'login.py');
        form.setAttribute('method', 'get');
        legend.textContent = 'Login';
        submit.setAttribute('value', 'Login');
        button.textContent = 'create account';
    }
}

var modify = (function() {
    let submit = document.querySelector('#submit');
    submit.addEventListener('onclick', login, false);
}());