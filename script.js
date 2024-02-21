document.querySelectorAll('input').forEach((input)=>{
    input.addEventListener('focus',function(){
        input.parentElement.classList.add('focused')
    })

    input.addEventListener('blur',function(){
        if(!Boolean(input.value)){
            input.parentElement.classList.remove('focused')
        }
    })
})

const formContainer = document.querySelector('.form-container');
const formWrapper = document.querySelector('.form-wrapper');

document.querySelector('.closeBtn').addEventListener('click',function(){
    formContainer.classList.toggle('show')
})

document.querySelector('.accountBtn').addEventListener('click',function(){
    formContainer.classList.toggle('show')
})

const registerLink = document.querySelector('.registerBtn');
const loginLink = document.querySelector('.loginBtn');

loginLink.addEventListener('click',function(e){
    e.preventDefault();
    formWrapper.classList.replace('register','login');
})

registerLink.addEventListener('click',function(e){
    e.preventDefault();
    formWrapper.classList.replace('login','register');
})