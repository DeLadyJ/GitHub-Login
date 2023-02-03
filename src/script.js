

 const LoginFormEl = document.querySelector('#form');
 const userNameEl = document.querySelector('#user-name');
 const passwordEl = document.querySelector('#password');
 const messageEl = document.querySelector('#message');
//  let loginForm = document.getElementById("Form");
// let userName = document.getElementById('#user-name');
// let password = document.getElementById('#password');
// let message = document.getElementById('#message');

LoginFormEl.addEventListener('submit', function (e)  {
    e.preventDefault();

    const userNameEl = userName.value;
    const passwordEl = password.value;
    const messageEl = message.value;

    if (userName.value == "" || password.value == "") {
        message.innerHTML = 
        `
        <span class="bg-red-500 text-white"><p>Input can not be empty.</p></span>
        `
    } else {
        if (userName.value > 3 || password.value > 6)  {
            message.innerHTML = 
        `
        <span class="bg-green-500 text-white"><p>Form submitted.</p></span>
        ` 
        }
    }
});




        