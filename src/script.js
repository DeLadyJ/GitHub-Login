

 const LoginFormEl = document.querySelector('#form');
 const userNameEl = document.querySelector('#user-name');
 const passwordEl = document.querySelector('#password');
 const messageEl = document.querySelector('#message');
//  let loginForm = document.getElementById("Form");
// let userName = document.getElementById('#user-name');
// let password = document.getElementById('#password');
// let message = document.getElementById('#message');

const form = document.getElementById('form');
const submit = document.getElementById('submit');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  
    e.preventDefault();

    const userNameEl = document.getElementById('user-name');
    const passwordEl = document.getElementById('password');
    
    if (userNameEl.value === "" ) {
      console.log('userNameEl.value')
      message.innerHTML =
        `<span class="bg-red-500 text-red"><p>Input can not be empty.</p></span>
   `
    } else {
      if (passwordEl.value === "") {
        console.log('passwordEl.value')
        message.innerHTML = 
        `<span class="bg-red-400 text-white"><p>Password can not be empty.</p></span>
        `
      } else {
        if (userNameEl.value >= 3 && passwordEl.value >= 6) {
          console.log('userNameEl.value')
          console.log('passwordEl.value')
          message.innerHTML = 
          `<span class="bg-green-200 text-white"><p>Success!.</p></span>
          `
        };
      }

    }
});
