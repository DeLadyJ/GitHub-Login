

//  const LoginFormEl = document.querySelector('#form');
//  const userNameEl = document.querySelector('#user-name');
//  const passwordEl = document.querySelector('#password');
//  const messageEl = document.querySelector('#message');

const form = document.getElementById('form');
const submit = document.getElementById('submit');
const message = document.getElementById('message');
const password = document.getElementById('password');
const userName = document.getElementById('user-name');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // const userName = userName.lenght ;
  // const password = password.value ;

    if (userName.value === "" || userName.value <= 3){
      console.log('not good')
    message.innerHTML =
      `
      <span class="text-red-200"><p>Input can't be least than 3 characters.</p></span>
      `
    } else {
      if (password.value === "" || password.value <= 5) {
        console.log('try again')
         message.innerHTML =
           ` 
           <span class="bg-red-400 text-white"><p>Password can't be empty or least than 6 characters.</p></span>
           `
  } else  {
        if (userName.value > 3 && password.value >= 6) {
          console.log('yayyy, tis good')
      message.innerHTML =
        ` 
           <span class="text-green"><p>Succes!</p></span>
           `
    }
  }
  }
  });

