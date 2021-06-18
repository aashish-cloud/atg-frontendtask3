var input = document.querySelector('#textInput');
var form = document.querySelector('.form-control');
var button = document.querySelector('.btn');
var loader = document.createElement('span');

button.addEventListener('click', () => {
    button.insertBefore(loader, button.firstChild)
    loader.classList.add('load')
    setTimeout(() => {
        loader.classList.remove('load');
        input.value = '';
        button.classList.add('btn-disable');
        form.classList.add('form-disable');
        input.disabled = true;
        button.disabled = true;
    }, 2000);
})