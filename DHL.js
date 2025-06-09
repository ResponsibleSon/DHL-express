function passwordLogin() {
   const  loginPage = document.querySelector('.js-loginPage');
   // the password object and passwordValue
   let password = document.querySelector('.js-password');
   let theCode = password.value;
   // the username ibject and name
   const username = document.querySelector('.js-user-customer-Name');
   let name = username.value;
   // wrong or right object
   const wrong = document.querySelector('.js-wrong');
   const confirm = document.querySelector('.js-confirmPassword');removeEventListener

   // Users Username variable
   
   const users = {
      "user1":{Password: "user@50589", pageUrl:"DHL-status-User50589.html"},
      "user2":{Password:"user@50011", pageUrl:"DHL-status-User50011.html"}
   }

   if (name in users && users[name].Password === theCode) {
      wrong.innerHTML = '<p class="right">Confirmed successfully. Redirecting...</p>';

      setTimeout(() => {
         window.location.href = users[name].pageUrl;
      }, 1500)
      console.log(true)
   } else {
       wrong.innerHTML = 
       '<p class="wrongpassword">Wrong Password, please contact Admin.</p>'; 
    }
   setTimeout(() => {
        wrong.innerText = '';
      }, 2000)

   password.value = '';

   // if (theCode === 'user1') {
   //    setTimeout(() => {
   //       trackNow1.click()
   //    }, 1500);
   //  wrong.innerHTML = '<p class="right">Confirmed successfully. Redirecting...</p>'; 
   // } else { 
   //    wrong.innerHTML = 
   //    '<p class="wrongpassword">Wrong Password, please contact Admin.</p>';
   // } 

  }

function enterLogin() {
   if (event.key === 'Enter') {
     passwordLogin();
   }
}
