

 const formEl = document.querySelector('#form');
 const userNameEl = document.querySelector('#user-name');
 const passwordEl = document.querySelector('#password');
 const messageEl = document.querySelector('#message');
//  let loginForm = document.getElementById("Form");
// let userName = document.getElementById('#user-name');
// let password = document.getElementById('#password');
// let message = document.getElementById('#message');

loginForm.addEventListener('submit', function (e)  {
    e.preventDefault();

    // let userName = userName.value;
    // let password = password.value;
    // let message = message.value;

    const userName = userName.value;
    const password = password.value;
    const message = message.value;

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




        