const email = prompt('Enter your email:');
const minEmailLength = 5;
const minPasswordLength = 6;
const userEmail = 'user@gmail.com';
const adminEmail = 'admin@gmail.com';

let userPassword = 'UserPass';
let adminPassword = 'AdminPass';

if (email === '') {
  alert('Canceled');
} else if (email.length < minEmailLength) {
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === userEmail || email === adminEmail) {
  let password = prompt('Enter password:');
  if (password === '' || password === null) {
    alert('Canceled');
  } else if (email === userEmail && password === userPassword || email === adminEmail && password === adminPassword) {
      const confirmation = confirm('Do you want to change the password?');
      if (confirmation) {
        let currentPassword = prompt('Enter your current password:');
        if (currentPassword === '' || currentPassword === null) {
          alert('Canceled');
        } else if (email === userEmail && currentPassword === userPassword
                   || email === adminEmail && currentPassword === adminPassword ) {
          let newPassword = prompt('Enter your new password');
          if (newPassword === '' || newPassword === null) {
            alert('Canceled');
          } else if (newPassword.length < minPasswordLength) {
            alert('It’s too short password. Sorry.');
          } else {
            let passwordConfirmation = prompt('Enter new password again:');
            if (passwordConfirmation === newPassword) {
              alert('You wrote the wrong password.');
            } else {
              alert('You have successfully changed your password.');
            }
          }
        } else {
          alert('Wrong password');
        }
      } else {
        alert('You have failed the change.');
      }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}
