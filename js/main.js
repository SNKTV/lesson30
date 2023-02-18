function validateEmail(email) {
  if (email == '') return false
  if (typeof email != 'string') return false
  if (!email.split('').includes('@') || email.split('')[0] == '@') return false

  // завдання 2
  if (email.length > 5) return false
  for (let i = 0; i < email.length; i++) {
    if (email.split(email[i]).length - 1 > 1) {
      return false;
    }
  }

  // завдання 3
  let count = email.split("@").length - 1;
  if (count > 1) return false

  // завдання 4
  let mail = email.slice(email.indexOf('@') + 1);
  if (!mail.includes('.') || email.includes('.@')) {
    return false
  }
  return true
}

console.log(Boolean(validateEmail('e.mail@gmail.com')));
console.log(Boolean(validateEmail('e.mail@gmailcom')));
console.log(Boolean(validateEmail('e.mail.@gmail.com')));